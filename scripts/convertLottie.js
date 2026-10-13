const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../src/assets/animations/background.json');
const raw = fs.readFileSync(inputPath, 'utf8');
const data = JSON.parse(raw);

const origW = data.w || 360;
const origH = data.h || 800;
const targetW = 1920;
const targetH = 1080;

const scaleX = targetW / origW; // 5.333333333333334
const scaleY = targetH / origH; // 1.35

data.w = targetW;
data.h = targetH;

function scalePoint(pt) {
  if (!Array.isArray(pt)) return pt;
  return [
    pt[0] !== undefined ? Number((pt[0] * scaleX).toFixed(3)) : 0,
    pt[1] !== undefined ? Number((pt[1] * scaleY).toFixed(3)) : 0,
    pt[2] !== undefined ? pt[2] : 0,
  ];
}

function scalePathData(pathObj) {
  if (!pathObj) return;
  ['v', 'i', 'o'].forEach(prop => {
    if (Array.isArray(pathObj[prop])) {
      pathObj[prop] = pathObj[prop].map(coord => [
        Number((coord[0] * scaleX).toFixed(3)),
        Number((coord[1] * scaleY).toFixed(3)),
      ]);
    }
  });
}

function processShapes(shapes) {
  if (!Array.isArray(shapes)) return;
  shapes.forEach(shape => {
    if (shape.ty === 'rc' && shape.s && Array.isArray(shape.s.k)) {
      // Rectangle (background)
      shape.s.k[0] = targetW;
      shape.s.k[1] = targetH;
    } else if (shape.ty === 'el' && shape.s && Array.isArray(shape.s.k)) {
      // Slightly scale particle size for high-res desktop screens
      shape.s.k[0] = Number((shape.s.k[0] * 1.35).toFixed(2));
      shape.s.k[1] = Number((shape.s.k[1] * 1.35).toFixed(2));
    } else if (shape.ty === 'sh' && shape.ks) {
      if (shape.ks.a === 0 && shape.ks.k) {
        scalePathData(shape.ks.k);
      } else if (shape.ks.a === 1 && Array.isArray(shape.ks.k)) {
        shape.ks.k.forEach(kf => {
          if (kf.s && Array.isArray(kf.s[0])) {
            scalePathData(kf.s[0]);
          }
        });
      }
    } else if (shape.ty === 'tr') {
      if (shape.p && Array.isArray(shape.p.k)) {
        shape.p.k = [
          Number((shape.p.k[0] * scaleX).toFixed(3)),
          Number((shape.p.k[1] * scaleY).toFixed(3)),
        ];
      }
    }
    if (shape.it) {
      processShapes(shape.it);
    }
  });
}

const particleLayers = [];

data.layers.forEach(layer => {
  // Scale position
  if (layer.ks && layer.ks.p) {
    const p = layer.ks.p;
    if (p.a === 0 && Array.isArray(p.k)) {
      p.k = scalePoint(p.k);
    } else if (p.a === 1 && Array.isArray(p.k)) {
      p.k.forEach(kf => {
        if (Array.isArray(kf.s)) {
          kf.s = scalePoint(kf.s);
        }
        if (Array.isArray(kf.to)) {
          kf.to = [Number((kf.to[0] * scaleX).toFixed(3)), Number((kf.to[1] * scaleY).toFixed(3)), 0];
        }
        if (Array.isArray(kf.ti)) {
          kf.ti = [Number((kf.ti[0] * scaleX).toFixed(3)), Number((kf.ti[1] * scaleY).toFixed(3)), 0];
        }
      });
    }
  }

  // Scale anchor point
  if (layer.ks && layer.ks.a && Array.isArray(layer.ks.a.k)) {
    layer.ks.a.k = [
      Number((layer.ks.a.k[0] * scaleX).toFixed(3)),
      Number((layer.ks.a.k[1] * scaleY).toFixed(3)),
      layer.ks.a.k[2] || 0,
    ];
  }

  if (layer.shapes) {
    processShapes(layer.shapes);
  }

  // Collect particle layers (layers 1 to 29)
  if (layer.ind <= 29) {
    particleLayers.push(layer);
  }
});

// Clone and horizontally offset additional particles to ensure a rich, balanced widescreen coverage
let nextInd = 33;
const extraOffsets = [-320, 280, 560];
extraOffsets.forEach((offsetX, i) => {
  particleLayers.slice(0, 10).forEach(origLayer => {
    const clone = JSON.parse(JSON.stringify(origLayer));
    clone.ind = nextInd++;
    clone.nm = `${origLayer.nm} wide_${i}`;
    if (clone.ks && clone.ks.p && clone.ks.p.a === 1) {
      clone.ks.p.k.forEach(kf => {
        if (Array.isArray(kf.s)) {
          kf.s[0] = Math.max(20, Math.min(targetW - 20, Number((kf.s[0] + offsetX).toFixed(2))));
        }
      });
    }
    // Prepend clone
    data.layers.unshift(clone);
  });
});

fs.writeFileSync(inputPath, JSON.stringify(data));
console.log('Successfully converted background.json to 1920x1080 landscape with ' + data.layers.length + ' layers!');
