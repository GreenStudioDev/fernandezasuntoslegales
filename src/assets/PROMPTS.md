# Prompts · imágenes de ambiente por área (6)

Especificación (ver `README.md` y DESIGN.md §8): 3:2 horizontal, mínimo 1200x800px,
sin personas, solo objetos y texturas. Los prompts están en inglés porque los
generadores responden mejor así. Cada uno es autocontenido: copiar y pegar tal cual.

Reglas comunes, ya incluidas en cada prompt:
- Bodegón editorial, luz natural lateral de ventana, tonos medios (funciona sobre fondo claro y oscuro del sitio).
- Paleta: grises piedra neutros, papel blanco roto, madera oscura y un solo acento verde bosque (#1D4A3A), el mismo del sitio.
- Nada de azul marino + dorado, beige + latón, mazos de juez (no se usan en Colombia), balanzas doradas ni estatuas de la justicia.
- Sin texto legible: los generadores inventan letras deformes y un documento legal falso resta credibilidad.

---

## 1. `area-disciplinario.jpg` · Derecho disciplinario

```
Editorial still life photograph, 3:2 landscape. A tall stack of thick case files bound with cotton string on a dark walnut desk, manila folders with worn edges, a few loose pages slightly fanned out, one folder with a deep forest green cover (#1D4A3A) on top. Soft natural side light from a tall window on the left, gentle long shadows, medium-low key exposure. Muted neutral palette: stone grey, off-white paper, dark wood, single forest green accent. Shallow depth of field, focus on the string knot. Shot on medium format, 80mm lens, realistic film grain, documentary restraint. No people, no hands, no readable text, no logos, no gavel, no scales of justice, no gold, no navy blue.
```

## 2. `area-educacion.jpg` · Educación superior y convalidaciones

```
Editorial still life photograph, 3:2 landscape. A university diploma in a plain off-white folder lying open on a light grey stone surface, beside it a set of official documents with an embossed blind seal and a small rubber stamp with a dark wooden handle, an ink pad closed nearby, a ribbon-tied apostille-style certificate partially visible. Soft diffuse window light from the upper left, subtle shadows, medium tones. Palette: stone grey, off-white paper, dark wood, a single forest green accent (#1D4A3A) on the folder ribbon. Shallow depth of field, focus on the embossed seal. Medium format, 80mm, realistic film grain, calm institutional mood. No people, no hands, no readable text or names, no logos, no gold foil, no graduation caps, no navy blue.
```

## 3. `area-civil.jpg` · Civil, comercial y propiedad horizontal

```
Editorial still life photograph, 3:2 landscape. A signed contract of several stapled pages resting on a dark walnut desk, a heavy closed fountain pen lying diagonally across it, two thick hardcover law codes stacked behind with plain dark green and charcoal cloth spines without visible titles, a single plain steel paperclip. Soft natural side light from a window on the right, long gentle shadows, medium-low key. Palette: stone grey, off-white paper, dark wood, forest green accent (#1D4A3A). Shallow depth of field, focus on the pen nib and the signature line (signature as an illegible abstract stroke). Medium format, 80mm, realistic film grain, quiet and precise. No people, no hands, no readable text, no logos, no gavel, no gold, no navy blue.
```

## 4. `area-familia.jpg` · Derecho de familia y alimentos

```
Editorial still life photograph, 3:2 landscape. A quiet notary table: a light oak surface with a neat set of documents squared together, a closed inkpad and fingerprint pad, a simple grey ceramic cup of black coffee, a pair of reading glasses folded on the papers, a small sprig of green olive leaves in a glass of water at the edge of the frame. Warm but restrained natural window light from the left, soft shadows, medium tones, a feeling of calm and care rather than conflict. Palette: stone grey, off-white paper, light oak, forest green accent (#1D4A3A) from the leaves and a folder. Shallow depth of field, focus on the glasses. Medium format, 80mm, realistic film grain. No people, no hands, no children, no wedding rings, no hearts, no readable text, no logos, no gold, no navy blue.
```

## 5. `area-laboral.jpg` · Derecho laboral

```
Editorial still life photograph, 3:2 landscape. The top of a grey steel office filing cabinet with one drawer slightly open showing rows of hanging folders with plain tabs, on top of the cabinet a thick paperback labor code with a plain dark green cover (#1D4A3A) and no visible title, a few employment contracts clipped together. Cool natural light from a high window, soft vertical shadows, medium tones. Palette: stone grey, cool steel, off-white paper, single forest green accent. Shallow depth of field, focus on the folder tabs. Medium format, 50mm, realistic film grain, orderly and sober. No people, no hands, no readable text, no logos, no gavel, no gold, no navy blue.
```

## 6. `area-constitucional.jpg` · Acciones constitucionales

```
Editorial still life photograph, 3:2 landscape. A thick bound constitution-style book lying open on a wooden lectern in an empty, quiet hearing room, rows of plain dark wooden benches softly out of focus in the background, tall window light falling across the open pages. The pages show only blurred, illegible text columns. A dark forest green (#1D4A3A) ribbon bookmark trails from the book. Medium-low key exposure, long soft light beams, dignified and public, not grandiose. Palette: stone grey walls, off-white paper, dark wood, single forest green accent. Shallow depth of field, focus on the ribbon and page edge. Medium format, 50mm, realistic film grain. No people, no flags, no national coat of arms, no readable text, no logos, no gavel, no scales of justice, no statues, no gold, no navy blue.
```

---

Al tener cada archivo: guardarlo en esta carpeta con el nombre exacto, importarlo en
`src/App.tsx` y pasarlo como `src` al `<ImageSlot>` del área (ver `README.md`).
