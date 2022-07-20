// render MindMapNode components into an HTML canvas element first.then we can use them to create a texture, which three.js can then put on any 3D mesh.

import { renderToStaticMarkup } from 'react-dom/server';

function loadImage(url) {
  const image = new window.Image();
  return new Promise((resolve) => {
    image.onload = () => resolve(image);
    image.src = url;
  });
}

export default async function renderToCanvas(content, { width, height }) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  // xmlns attribute – this is necessary for rendering the React component into an SVG image
  const url = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <style type="text/css">
        <![CDATA[
          ${document.getElementById('styles').innerHTML}
        ]]>
      </style>
      <foreignObject width="${width}" height="${height}">
      ${renderToStaticMarkup(content)}
      </foreignObject>
      </svg>`;
  const image = await loadImage(url);
  ctx.drawImage(image, 0, 0);
  return canvas;
}