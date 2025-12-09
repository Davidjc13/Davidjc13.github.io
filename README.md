# Portafolio (plantilla)

Esta es una plantilla de portafolio ligera y curiosa destinada a ser la página personal de David.

Archivos principales:

Vista previa local
1. Abre una terminal en la carpeta del proyecto.
2. Ejecuta un servidor ligero (Python 3):

```bash
python3 -m http.server 8000
```

3. Abre `http://localhost:8000` en tu navegador.

- Para cambiar las tecnologías, edita la lista dentro del div con `class="tech-grid"` en `index.html`.
- Para añadir/editar experiencias, modifica los `div.timeline-item` en `index.html`. Ahora cada `timeline-item` acepta un icono local en `assets/icons/` (imagen con `class="item-icon`).
- Para añadir/editar estudios, modifica los `div.study-item` en `index.html`. Cada entrada puede mostrar un icono (ej. `assets/icons/university.svg`).

Cómo añadir iconos de instituciones
- Coloca los SVGs o PNGs de los logos en `assets/icons/`.
- En cada `timeline-item` o `study-item` sustituye el `src` del `img.item-icon` por la ruta a tu icono.
- Los iconos deben ser cuadrados preferiblemente; el CSS los ajusta a `56x56`.


