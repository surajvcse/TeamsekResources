// Project gallery data. Images live in /public/projects.
const BASE = import.meta.env.BASE_URL

export const PROJECTS = [
  { img: `${BASE}projects/parbati.jpg`,   title: 'Parbati Hydroelectric Project',   tag: 'Hydro Power · Tunnel' },
  { img: `${BASE}projects/teesta.jpg`,    title: 'Teesta IV Hydroelectric Project', tag: 'Hydro Power' },
  { img: `${BASE}projects/srinagar.jpg`,  title: 'Srinagar Hydroelectric Project',  tag: 'Hydro Power' },
  { img: `${BASE}projects/tashiding.jpg`, title: 'Tashiding Hydroelectric Project', tag: 'Hydro Power' },
  { img: `${BASE}projects/rampura.jpg`,   title: 'Rampura Agucha Open-Pit Mine',     tag: 'Mining · Slope Stabilization' },
  { img: `${BASE}projects/kollidam.jpg`,  title: 'Kollidam Flood Protection',        tag: 'Water · Flood Protection' },
  { img: `${BASE}projects/astaldi.jpg`,   title: 'Astaldi Road Project',             tag: 'Roads · Earthworks' },
  { img: `${BASE}projects/saraya.jpg`,    title: 'Saraya Bandar Jissah, Oman',       tag: 'Foundations · Ground Engg.' },
]