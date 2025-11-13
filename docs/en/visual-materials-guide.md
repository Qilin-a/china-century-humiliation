# Visual Materials Guide

This guide provides recommendations for adding historical images, maps, photographs, and other visual materials to enhance the China's Century of Humiliation documentation project.

---

## Overview

Visual materials can significantly enhance understanding of historical events. This guide outlines:
- Types of visual materials to include
- Copyright and licensing considerations
- Recommended sources
- File organization and naming conventions
- Attribution requirements

---

## Types of Visual Materials

### 1. Historical Maps

**Territorial Changes**:
- Map of China before and after Opium Wars
- Treaty ports and foreign concessions (1842-1943)
- Spheres of influence (1898-1900)
- Japanese occupation zones (1937-1945)
- Territorial losses and recoveries

**Battle Maps**:
- First Opium War campaigns
- Sino-Japanese War naval battles
- Eight-Nation Alliance march to Beijing
- Major WWII battles in China

**Recommended Format**: High-resolution PNG or SVG files

### 2. Historical Photographs

**Events**:
- Destruction of Summer Palace (1860)
- Boxer Rebellion scenes
- Wuchang Uprising (1911)
- May Fourth Movement protests (1919)
- Second Sino-Japanese War battles

**People**:
- Lin Zexu
- Li Hongzhang
- Sun Yat-sen
- Chiang Kai-shek
- Mao Zedong
- Key foreign figures

**Places**:
- Treaty ports
- Foreign concessions
- Historical sites
- War damage

### 3. Treaty Documents

**Original Documents** (if available):
- Treaty of Nanking (1842)
- Treaty of Shimonoseki (1895)
- Boxer Protocol (1901)
- Twenty-One Demands (1915)

**Format**: Scanned images of original documents with transcriptions

### 4. Propaganda and Art

**Chinese**:
- Anti-opium posters
- Anti-Japanese war posters
- Revolutionary art
- Political cartoons

**Foreign**:
- Western depictions of China
- Japanese propaganda
- Political cartoons

### 5. Infographics and Diagrams

**Data Visualizations**:
- Indemnity payments over time
- Casualties by conflict
- Economic impact charts
- Timeline visualizations

**Organizational Charts**:
- Government structures
- Military hierarchies
- Treaty relationships

---

## Copyright and Licensing

### Public Domain Materials

**Generally Safe to Use**:
- Works published before 1928 (in most jurisdictions)
- Chinese government documents (check specific laws)
- Works by authors who died 70+ years ago
- Explicitly marked public domain

**Verify Before Use**:
- Check copyright status in relevant jurisdictions
- Confirm publication date
- Verify author death date if applicable

### Creative Commons Materials

**Acceptable Licenses**:
- CC0 (Public Domain)
- CC BY (Attribution)
- CC BY-SA (Attribution-ShareAlike) - compatible with our license

**Avoid**:
- CC BY-NC (Non-Commercial)
- CC BY-ND (No Derivatives)
- All Rights Reserved

### Fair Use Considerations

**Educational Use**:
- This project qualifies as educational
- Use only what's necessary
- Provide proper attribution
- Transformative use preferred

**Best Practice**:
- Seek permission when possible
- Use public domain when available
- Provide clear attribution always

---

## Recommended Sources

### Archives and Libraries

**International**:
- Library of Congress (USA) - extensive China collection
- British Library - Opium War materials
- National Archives (UK) - colonial documents
- Bibliothèque nationale de France

**Chinese**:
- National Archives of China
- National Library of China
- Academia Sinica (Taiwan)
- University libraries

**Japanese**:
- National Diet Library
- National Archives of Japan

### Online Resources

**Wikimedia Commons**:
- Large collection of historical images
- Clear licensing information
- Good search functionality
- URL: commons.wikimedia.org

**Internet Archive**:
- Historical books and documents
- Public domain materials
- URL: archive.org

**Europeana**:
- European cultural heritage
- Many China-related materials
- URL: europeana.eu

**Digital Collections**:
- Harvard Library
- Yale Library
- Stanford Library
- University of Hong Kong

### Academic Databases

**JSTOR**:
- Historical photographs
- Academic articles with images
- Check licensing for each image

**ProQuest Historical Newspapers**:
- Contemporary news photos
- Political cartoons

---

## File Organization

### Directory Structure

```
try/
└── docs/
    └── images/
        ├── maps/
        │   ├── treaty-ports-1842-1900.png
        │   ├── spheres-of-influence-1900.png
        │   ├── sino-japanese-war-battles.png
        │   └── japanese-occupation-1937-1945.png
        ├── photos/
        │   ├── people/
        │   │   ├── lin-zexu.jpg
        │   │   ├── sun-yat-sen.jpg
        │   │   └── ...
        │   ├── events/
        │   │   ├── opium-destruction-1839.jpg
        │   │   ├── boxer-rebellion-1900.jpg
        │   │   └── ...
        │   └── places/
        │       ├── summer-palace-ruins.jpg
        │       ├── shanghai-bund-1920s.jpg
        │       └── ...
        ├── documents/
        │   ├── treaty-nanking-1842.jpg
        │   ├── treaty-shimonoseki-1895.jpg
        │   └── ...
        ├── propaganda/
        │   ├── anti-opium-poster.jpg
        │   ├── anti-japanese-poster.jpg
        │   └── ...
        └── infographics/
            ├── timeline-visualization.svg
            ├── indemnity-chart.png
            └── ...
```

### Naming Conventions

**Format**: `description-year.extension`

**Examples**:
- `lin-zexu-portrait.jpg`
- `treaty-nanking-1842.jpg`
- `battle-of-yellow-sea-1894.png`
- `may-fourth-protest-1919.jpg`

**Rules**:
- Use lowercase
- Separate words with hyphens
- Include year when relevant
- Be descriptive but concise
- Use standard file extensions

---

## Image Specifications

### Technical Requirements

**Resolution**:
- Minimum: 1200px on longest side
- Preferred: 2000px+ for archival quality
- Maps: Higher resolution for detail

**File Formats**:
- Photos: JPEG (quality 85-95%)
- Graphics: PNG for transparency
- Diagrams: SVG when possible
- Documents: High-res JPEG or PDF

**File Size**:
- Balance quality and file size
- Optimize for web display
- Keep originals for archival

### Accessibility

**Alt Text**:
- Provide descriptive alt text
- Explain what's shown
- Include relevant context
- Keep concise but informative

**Captions**:
- Date and location
- Brief description
- Historical context
- Source attribution

---

## Attribution Requirements

### Required Information

For each image, provide:

1. **Title/Description**: What the image shows
2. **Date**: When created/taken
3. **Creator**: Photographer, artist, or organization
4. **Source**: Where obtained
5. **License**: Copyright status or license type
6. **URL**: Link to original if online

### Attribution Format

**In Markdown**:
```markdown
![Description](path/to/image.jpg)

*Image: [Title]. [Date]. [Creator]. Source: [Institution/Archive]. [License]. [URL]*
```

**Example**:
```markdown
![Lin Zexu portrait](images/photos/people/lin-zexu.jpg)

*Image: Portrait of Lin Zexu. c. 1840. Unknown artist. Source: Wikimedia Commons. Public Domain. https://commons.wikimedia.org/wiki/File:Lin_Zexu.jpg*
```

---

## Specific Recommendations by Event

### Opium Wars (1839-1860)

**Essential Images**:
- Lin Zexu destroying opium at Humen
- British naval vessels
- Treaty of Nanking signing
- Summer Palace before and after destruction
- Map of treaty ports

**Sources**:
- British Museum
- National Maritime Museum (UK)
- Library of Congress

### Sino-Japanese War (1894-1895)

**Essential Images**:
- Battle of the Yalu River
- Beiyang Fleet ships
- Treaty of Shimonoseki signing
- Map of territorial changes
- Li Hongzhang

**Sources**:
- National Diet Library (Japan)
- Naval History and Heritage Command (USA)

### Boxer Rebellion (1899-1901)

**Essential Images**:
- Boxer fighters
- Siege of legations
- Eight-Nation Alliance troops
- Destruction in Beijing
- Boxer Protocol document

**Sources**:
- Library of Congress
- National Archives (multiple countries)

### Xinhai Revolution (1911-1912)

**Essential Images**:
- Wuchang Uprising
- Sun Yat-sen
- Emperor Puyi
- Revolutionary flags and symbols
- Proclamation of Republic

**Sources**:
- National Archives of China
- Academia Sinica

### May Fourth Movement (1919)

**Essential Images**:
- Student protests at Tiananmen
- New Youth magazine covers
- Protest banners and slogans
- Key intellectuals (Chen Duxiu, Hu Shi, Lu Xun)

**Sources**:
- Peking University archives
- Contemporary newspapers

### Second Sino-Japanese War (1937-1945)

**Essential Images**:
- Marco Polo Bridge
- Battle scenes
- Nanjing Massacre memorial
- Flying Tigers
- Japanese surrender ceremony

**Sources**:
- National Archives (USA, China, Japan)
- WWII photo archives

---

## Creating Original Visual Materials

### Maps

**Tools**:
- QGIS (free, open-source)
- Adobe Illustrator
- Inkscape (free)

**Data Sources**:
- Historical atlases
- Academic publications
- Government surveys

**Best Practices**:
- Use accurate historical boundaries
- Clear legends and labels
- Consistent color schemes
- Include scale and orientation

### Infographics

**Tools**:
- Canva (free tier available)
- Adobe Illustrator
- Inkscape

**Design Principles**:
- Clear visual hierarchy
- Accurate data representation
- Accessible color choices
- Proper citations for data

### Timeline Visualizations

**Tools**:
- TimelineJS (free, web-based)
- Adobe Illustrator
- Custom HTML/CSS/JavaScript

**Content**:
- Major events with dates
- Brief descriptions
- Links to detailed pages
- Images when available

---

## Legal and Ethical Considerations

### Sensitive Content

**War Atrocities**:
- Include for historical accuracy
- Provide content warnings
- Use discretion in graphic images
- Focus on educational value

**Cultural Sensitivity**:
- Respect all perspectives
- Avoid stereotypical images
- Provide context
- Acknowledge controversies

### Permissions

**When to Seek Permission**:
- Recent photographs (post-1928)
- Unclear copyright status
- Commercial archives
- Private collections

**How to Request**:
- Identify yourself and project
- Explain educational purpose
- Specify intended use
- Offer attribution
- Be prepared to pay fees if required

---

## Implementation Checklist

### Before Adding Images

- [ ] Verify copyright status
- [ ] Confirm license compatibility
- [ ] Obtain necessary permissions
- [ ] Prepare attribution information
- [ ] Optimize file size and format

### When Adding Images

- [ ] Use consistent naming convention
- [ ] Place in appropriate directory
- [ ] Add to relevant markdown files
- [ ] Include alt text
- [ ] Provide caption and attribution

### After Adding Images

- [ ] Test display in markdown
- [ ] Verify links work
- [ ] Check accessibility
- [ ] Update image index
- [ ] Document in changelog

---

## Future Enhancements

### Potential Additions

**Interactive Maps**:
- Leaflet.js for web maps
- Show changes over time
- Clickable locations

**Photo Galleries**:
- Organized by event
- Lightbox viewing
- Detailed captions

**3D Visualizations**:
- Historical sites reconstruction
- Battle animations
- Data visualizations

**Virtual Tours**:
- Historical locations
- Museum collections
- Archival materials

---

## Resources and Further Reading

### Copyright Guides

- Creative Commons: creativecommons.org
- Copyright Term and the Public Domain: copyright.cornell.edu
- Fair Use Guidelines: fairuse.stanford.edu

### Image Databases

- Wikimedia Commons: commons.wikimedia.org
- Internet Archive: archive.org
- Europeana: europeana.eu
- Digital Public Library of America: dp.la

### Tools

- QGIS: qgis.org
- Inkscape: inkscape.org
- GIMP: gimp.org
- ImageMagick: imagemagick.org

---

## Contact and Contributions

If you have historical images to contribute or questions about visual materials:

1. Open an issue on GitHub
2. Provide image details and source
3. Confirm copyright status
4. Follow contribution guidelines

---

*This guide will be updated as the project evolves and new visual materials are added.*
