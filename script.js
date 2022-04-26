
const LEVELS = {
    prepA: {
        technical: "<b>PENTASCALES:</b><br>major: C, G, D<br>minor: A<br><br><b>TRIADS:</b><br>major: C",
        repertoire: "2 pieces",
        etudes: "none",
        earTests: "<b>CLAPBACK:</b><br>3/4 or 4/4 time,<br>approx. length: 2 measures<br><br><b>CHORD QUALITY:</b><br>major & minor triads<br><br><b>PLAYBACK:</b><br>keys: C or G major,<br>starting on: tonic or mediant,<br>approx. length: 4 notes<br><br><b>RHYTHM:</b><br> 4/4 time,<br>approx. length: 2 measures<br><br><b>PLAYING:</b><br> 4/4 time,<br> 2 melodies HS"
    },
    prepB: {
        technical: "<b>PENTASCALES:</b><br> major: D, A, F<br>minor: E, D<br><br><b>SCALES:</b><br>major: C, G <br>minor: A (natural)<br><br><b>CONTRARY MOTION SCALE:</b><br> C major<br><br><b>TRIADS:</b><br>major: C, G<br>minor: A",
        repertoire: "2 pieces",
        etudes: "none",
        earTests: "<b>CLAPBACK:</b><br>3/4 or 4/4 time<br>approx. length: 2 measures<br><br><b>CHORD QUALITY:</b><br>major & minor triads<br><br><b>PLAYBACK:</b><br>keys: C, G major, A minor,<br>starting on: tonic or mediant,<br>approx. length: 4 notes<br><br><b>RHYTHM:</b><br>4/4 time,<br> approx. length: 2 measures<br><br><b>PLAYING:</b><br>4/4 time,<br> 2 melodies HS"
    },
    lvl1: {
        technical: "<b>SCALES:</b><br> major: C, G, F<br>minor: A, E, D (nat. & har.)<br><br><b>CONTRARY MOTION:</b><br> C major<br><br><b>CHROMATIC:</b><br>starting on C<br><br><b>TRIADS:</b><br>major: C, G, F<br>minor: A, E, D",
        repertoire: "3 pieces<br><a href='https://dacapomusic.ca/rcm-piano-repertoire-all-pieces/#lvl1' target='_blank'>view song options</a>",
        etudes: "1 piece<br><a href='https://dacapomusic.ca/rcm-piano-etudes-all-pieces/#lvl1' target='_blank'>view song options</a>",
        earTests: "<b>CLAPBACK:</b><br>3/4 or 4/4 time<br><br><b>INTERVALS:</b><br>major & minor thirds<br><br><b>CHORDS:</b><br>major & minor triads<br><br><b>PLAYBACK:</b><br>keys: C, G major, A minor,<br>starting on: tonic or dominant,<br>approx. length: 5 notes<br><br><b>RHYTHM:</b><br>4/4 time,<br>approx. length: 2 measures<br><br><b>PLAYING:</b><br>4/4 time,<br>C, G, F major,<br> A minor"
    },
    lvl2: {
        technical: "<b>SCALES:</b><br> major: G, F, B♭<br>minor: E, D, G (har. & mel.)<br><br><b>FORMULA PATTERN:</b><br>C, G major<br><br><b>CHROMATIC:</b><br>starting on G<br><br><b>TRIADS:</b><br>major: G, F, B♭<br>minor: E, D, G",
        repertoire: "3 pieces<br><a href='https://dacapomusic.ca/rcm-piano-repertoire-all-pieces/#lvl2' target='_blank'>view song options</a>",
        etudes: "1 piece<br><a href='https://dacapomusic.ca/rcm-piano-etudes-all-pieces/#lvl2' target='_blank'>view song options</a>",
        earTests: "<b>CLAPBACK:</b><br>3/4 or 4/4 time,<br>approx. length: 2-3 measures<br><br><b>INTERVALS:</b><br>major 3rd, minor 3rd,<br> perfect 5th<br><br><b>CHORDS:</b><br>major & minor triads<br><br><b>PLAYBACK:</b><br>keys: G, F major,<br> D minor,<br>starting on: tonic or dominant,<br>approx. length: 5 notes<br><br><b>RHYTHM:</b><br>3/4 or 4/4 time,<br>approx. length: 2-4 measures<br><br><b>PLAYING:</b><br>4/4 time,<br> C, G, F major, <br>A, D minor"
    },
    lvl3: {
        technical: "<b>SCALES:</b><br> major: D, F, B♭<br>minor: B, D, G (har. & mel.)<br><br><b>FORMULA PATTERN:</b><br>D major<br><br><b>CHROMATIC:</b><br>starting on D<br><br><b>TRIADS:</b><br>major: D, F, B♭<br>minor: B, D, G",
        repertoire: "3 pieces<br><a href='https://dacapomusic.ca/rcm-piano-repertoire-all-pieces/#lvl3' target='_blank'>view song options</a>",
        etudes: "2 pieces<br><a href='https://dacapomusic.ca/rcm-piano-etudes-all-pieces/#lvl3' target='_blank'>view song options</a>",
        earTests: "<b>CLAPBACK:</b><br>3/4 or 4/4 time,<br>approx. length: 3-4 measures<br><br><b>INTERVALS:</b><br>major 3rd, minor 3rd,<br> perfect 4th,<br>perfect 5th<br><br><b>CHORDS:</b><br>major & minor triads<br><br><b>PLAYBACK:</b><br>keys: D, F major,<br> D, G minor,<br>starting on: tonic, mediant, or dominant,<br>approx. length: 5-6 notes<br><br><b>RHYTHM:</b><br>3/4 or 4/4 time,<br>approx. length: 4 measures<br><br><b>PLAYING:</b><br>4/4 time,<br> C, G, D, F major,<br> A, D minor"
    },
    lvl4: {
        technical: "<b>SCALES:</b><br> major: D, A, B♭, E♭<br>minor: B, G, C (har. & mel.)<br><br><b>FORMULA PATTERN:</b><br>C minor (har.)<br><br><b>CHROMATIC:</b><br>starting on C<br><br><b>TRIADS:</b><br>major: D, A, B♭, E♭<br>minor: B, G, C",
        repertoire: "3 pieces<br><a href='https://dacapomusic.ca/rcm-piano-repertoire-all-pieces/#lvl4' target='_blank'>view song options</a>",
        etudes: "2 pieces<br><a href='https://dacapomusic.ca/rcm-piano-etudes-all-pieces/#lvl4' target='_blank'>view song options</a>",
        earTests: "<b>CLAPBACK:</b><br>3/4, 4/4, or 6/8 time,<br> 2-4 measures<br><br><b>INTERVALS:</b><br>major 3rd, minor 3rd,<br> perfect 4th,<br> perfect 5th,<br> perfect 8ve<br><br><b>CHORDS:</b><br>major & minor triads<br><br><b>PLAYBACK:</b><br>keys: D, A major,<br> G, C minor,<br>starting on: tonic, mediant, or dominant,<br>approx. length: 6-8 notes<br><br><b>RHYTHM:</b><br>3/4 or 4/4 time,<br> 4 measures<br><br><b>PLAYING:</b><br>3/4, 4/4 time,<br> C, G, D, F major,<br> A, E, D minor"
    },
    lvl5: {
        technical: "<b>SCALES:</b><br> major: A, E, F, A♭<br>minor: A, E, F (har. & mel.)<br><br><b>FORMULA PATTERN:</b><br>A major,<br> A minor (har.)<br><br><b>CHROMATIC:</b><br>starting on A, F<br><br><b>TRIADS:</b><br>major: A, E, F, A♭<br>minor: A, E, F<br><br><b>DOMINANT 7th CHORDS:</b><br>major: A, E, F, A♭<br><br><b>ARPEGGIOS:</b><br>major: A, E, F, A♭<br>minor: A, E F",
        repertoire: "3 pieces<br><a href='https://dacapomusic.ca/rcm-piano-repertoire-all-pieces/#lvl5' target='_blank'>view song options</a>",
        etudes: "2 pieces<br><a href='https://dacapomusic.ca/rcm-piano-etudes-all-pieces/#lvl5' target='_blank'>view song options</a>",
        earTests: "<b>INTERVALS:</b><br>major 3rd, minor 3rd,<br> perfect 4th,<br> perfect 5th,<br> major 6th, minor 6th,<br> perfect 8ve<br><br><b>CHORDS:</b><br>major & minor triads,<br> dominant 7th (major-minor 7th)<br><br><b>CHORD PROGRESSIONS:</b><br>I-IV-I, I-V-I<br><br><b>PLAYBACK:</b><br>keys: A, E major,<br> A, E minor,<br>starting on: tonic, mediant,<br> dominant, or upper tonic,<br>approx. length: up to 8 notes<br><br><b>RHYTHM:</b><br>a passage within playing excerpt<br><br><b>PLAYING:</b><br>major & minor keys,<br> up to 2 sharps or flats<br>3/4, 4/4, 6/8<br>up to 8 measures"
    },
    lvl6: {
        technical: "<b>SCALES:</b><br> major: G, E, B, D♭<br>minor: G, E, B, C♯ (har. & mel.)<br><br><b>FORMULA PATTERN:</b><br>E major,<br> E minor (har.)<br><br><b>CHROMATIC:</b><br>starting on E, D♭<br><br><b>TRIADS:</b><br>major: G, E, B, D♭<br>minor: G, E, B, C♯<br><br><b>DOMINANT 7th CHORDS:</b><br>major: G, E, B, D♭<br><br><b>LEADING-TONE DIMINISHED 7th CHORDS:</b><br>G, E, B, C♯ minor<br><br><b>ARPEGGIOS (tonic):</b><br>major: G, E, B, D♭<br>minor: G, E, B, C♯<br><br><b>ARPEGGIOS (dom 7th):</b><br>G, E, B, D♭<br><br><b>ARPEGGIOS (dim 7th):</b><br>G, E, B, C♯ minor",
        repertoire: "3 pieces<br><a href='https://dacapomusic.ca/rcm-piano-repertoire-all-pieces/#lvl6' target='_blank'>view song options</a>",
        etudes: "2 pieces<br><a href='https://dacapomusic.ca/rcm-piano-etudes-all-pieces/#lvl6' target='_blank'>view song options</a>",
        earTests: "<b>INTERVALS:</b><br>major 2nd, minor 2nd,<br> major 3rd, minor 3rd,<br> perfect 4th,<br> perfect 5th,<br> major 6th, minor 6th,<br> perfect 8ve<br><br><b>CHORDS:</b><br>major & minor triads,<br> dominant 7th (major-minor 7th),<br> diminished 7th<br><br><b>CHORD PROGRESSIONS:</b><br>major: I-IV-I, I-V-I,<br>minor: i-iv-i, i-V-i<br><br><b>PLAYBACK:</b><br>keys: G, E major,<br> G, E minor,<br>3/4, 4/4,<br>approx. length: up to 9 notes<br><br><b>RHYTHM:</b><br>a passage within playing excerpt<br><br><b>PLAYING:</b><br>major & minor keys,<br> up to 3 sharps or flats,<br>2/4, 3/4, 4/4, 6/8,<br> 8 measures"
    },
    lvl7: {
        technical: "<b>SCALES:</b><br> major: C, D, F, A♭, G♭<br>minor: C, D, F, G♯, F♯ (har. & mel.)<br><br><b>FORMULA PATTERN:</b><br>D major, E minor (har.)<br><br><b>CHROMATIC:</b><br>starting on D, G♭<br><br><b>FOUR-NOTE CHORDS:</b><br>major: C, D, F, A♭, G♭<br>minor: C, D, F, G♯, F♯<br><br><b>DOMINANT 7th CHORDS:</b><br>C, D, F, A♭, G♭<br><br><b>LEADING-TONE DIMINISHED 7th CHORDS:</b><br>C, D, F, G♯, F♯ minor<br><br><b>ARPEGGIOS (tonic):</b><br>major: C, D, F, A♭, G♭<br>minor: C, D, F, G♯, C♯<br><br><b>ARPEGGIOS (dom 7th):</b><br>C, D, F, A♭, G♭ major<br><br><b>ARPEGGIOS (dim 7th):</b><br>C, D, F, G♯, F♯ minor",
        repertoire: "3 pieces<br><a href='https://dacapomusic.ca/rcm-piano-repertoire-all-pieces/#lvl7' target='_blank'>view song options</a>",
        etudes: "2 pieces<br><a href='https://dacapomusic.ca/rcm-piano-etudes-all-pieces/#lvl7' target='_blank'>view song options</a>",
        earTests: "<b>INTERVALS:</b><br>major 2nd, minor 2nd,<br> major 3rd, minor 3rd,<br> perfect 4th,<br> perfect 5th,<br> major 6th, minor 6th,<br> major 7th, minor 7th,<br> perfect 8ve<br><br><b>CHORDS:</b><br>major, minor, augmented triads,<br> dominant 7th (major-minor 7th),<br> diminished 7th<br><br><b>CHORD PROGRESSIONS:</b><br>major: I-IV-I, I-V-I, I-IV-V,<br>minor: i-iv-i, i-V-i, i-iv-V<br><br><b>PLAYBACK:</b><br>keys: D, F major,<br> G, E minor<br>2/3, 3/4, 6/8,<br>approx. length: up to 10 notes<br><br><b>RHYTHM:</b><br>a passage within playing excerpt<br><br><b>PLAYING:</b><br>major & minor keys,<br> up to 3 sharps or flats<br>2/4, 3/4, 4/4, 6/8,<br> 8-12 measures"
    },
    lvl8: {
        technical: "<b>SCALES:</b><br> major: C, D, E, B♭, E♭, G♭<br>minor: C, D, E, B♭, E♭, F♯ (har. & mel.)<br><br><b>FORMULA PATTERN:</b><br>E♭ major, E♭ minor (har.)<br><br><b>CHROMATIC:</b><br>starting on E♭, E<br><br><b>FOUR-NOTE CHORDS:</b><br>major: C, D, E, B♭, E♭, G♭<br>minor: C, D, E, B♭, E♭, F♯<br><br><b>DOMINANT 7th CHORDS:</b><br>C, D, E, B♭, E♭, G♭<br><br><b>LEADING-TONE DIMINISHED 7th CHORDS:</b><br>C, D, E, B♭, E♭, F♯ minor<br><br><b>ARPEGGIOS (tonic):</b><br>major: C, D, E, B♭, E♭, G♭<br>minor: C, D, E, B♭, E♭, F♯<br><br><b>ARPEGGIOS (dom 7th):</b><br>C, D, E, B♭, E♭, G♭ major<br><br><b>ARPEGGIOS (dim 7th):</b><br>C, D, E, B♭, E♭, F♯ minor",
        repertoire: "4 pieces<br><a href='https://dacapomusic.ca/rcm-piano-repertoire-all-pieces/#lvl8' target='_blank'>view song options</a>",
        etudes: "2 pieces<br><a href='https://dacapomusic.ca/rcm-piano-etudes-all-pieces/#lvl8' target='_blank'>view song options</a>",
        earTests: "<b>INTERVALS:</b><br>major 2nd, minor 2nd,<br> major 3rd, minor 3rd,<br> perfect 4th,<br> aug 4th/dim 5th,<br> perfect 5th,<br> major 6th, minor 6th,<br> major 7th, minor 7th,<br> perfect 8ve<br><br><b>CHORDS:</b><br>major, minor, augmented triads,<br> dominant 7th (major-minor 7th),<br> diminished 7th<br><br><b>CHORD PROGRESSIONS:</b><br>major: I-IV-V-I, I-IV-V-vi, I-vi-IV-V, I-vi-IV-I,<br>minor: i-iv-V-i, i-iv-V-VI, i-VI-iv-V, i-VI-iv-i<br><br><b>PLAYBACK:</b><br>keys: B♭, E♭ major,<br> C, E minor,<br>2/4, 3/4, 4/4, 6/8,<br>approx length: up to 11 notes<br><br><b>RHYTHM:</b><br>a passage within playing excerpt<br><br><b>PLAYING:</b><br>major & minor keys,<br> up to 4 sharps or flats,<br>2/4, 3/4, 4/4, 6/8,<br> 8-12 measures"
    },
    lvl9: {
        technical: "<b>SCALES:</b><br> major: C, D♭, D, E♭, E, F<br>minor: C, C♯, D, E♭, E, F (har. & mel.)<br><br><b>FORMULA PATTERN:</b><br>F, D♭ major, F, C♯ minor (har.)<br><br><b>CHROMATIC:</b><br>starting on any note from C-F<br><br><b>OCTAVES:</b><br>F, D♭ major, F, C♯ minor<br><br><b>FOUR-NOTE CHORDS:</b><br>major: C, D♭, D, E♭, E, F<br>minor: C, C♯, D, E♭, E, F<br><br><b>DOMINANT 7th CHORDS:</b><br>C, D♭, D, E♭, E, F<br><br><b>LEADING-TONE DIMINISHED 7th CHORDS:</b><br>C, C♯, D, E♭, E, F minor<br><br><b>ARPEGGIOS (tonic):</b><br>major: C, D♭, D, E♭, E, F<br>minor: C, C♯, D, E♭, E, F<br><br><b>ARPEGGIOS (dom 7th):</b><br>C, D♭, D, E♭, E, F major<br><br><b>ARPEGGIOS (dim 7th):</b><br>C, C♯, D, E♭, E, F minor",
        repertoire: "4 pieces<br><a href='https://dacapomusic.ca/rcm-piano-repertoire-all-pieces/#lvl9' target='_blank'>view song options</a>",
        etudes: "2 pieces<br><a href='https://dacapomusic.ca/rcm-piano-etudes-all-pieces/#lvl9' target='_blank'>view song options</a>",
        earTests: "<b>INTERVALS:</b><br>major 2nd, minor 2nd,<br> major 3rd, minor 3rd,<br> perfect 4th,<br> aug 4th/dim 5th,<br> perfect 5th,<br> major 6th, minor 6th,<br> major 7th, minor 7th,<br> perfect 8ve<br><br><b>CHORDS:</b><br>major & minor 4-note chords,<br> augmented triads,<br> dominant 7th (major-minor 7th),<br> diminished 7th<br><br><b>CHORD PROGRESSIONS:</b><br>major: I, IV, V, vi (root position only)<br>minor: i, iv, V, VI (root position only)<br><br><b>PLAYBACK:</b><br>keys: any major or minor key,<br> up to 4 sharps or flats,<br>2/4, 3/4, 4/4, 6/8,<br>approx length: up to 9 notes<br><br><b>RHYTHM:</b><br>a passage within playing excerpt<br><br><b>PLAYING:</b><br>major & minor keys,<br> up to 5 sharps or flats,<br>any time signature,<br> up to 16 measures"
    },
    lvl10: {
        technical: "<b>SCALES:</b><br> major: G♭, G, A♭, A, B♭, B<br>minor: F♯, G, G♯, A, B♭, B (har. & mel.)<br><br><b>FORMULA PATTERN:</b><br>F, D♭ major, F, C♯ minor (har.)<br><br><b>SEPARATED BY A 3rd:</b><br>G♭, G, A♭<br><br><b>SEPARATED BY A 6th:</b><br>A, B♭, B<br><br><b>OCTAVES:</b><br>B♭, B major, B♭, B minor (har. & mel.)<br><br><b>CHROMATIC in OCTAVES:</b><br>starting on any note from F♯ to B<br><br><b>FOUR-NOTE CHORDS:</b><br>major: G♭, G, A♭, A, B♭, B<br>minor: F♯, G, A♭, A, B♭, B<br><br><b>DOMINANT 7th CHORDS:</b><br>G♭, G, A♭, A, B♭, B<br><br><b>LEADING-TONE DIMINISHED 7th CHORDS:</b><br>F♯, G, A♭, A, B♭, B minor<br><br><b>ARPEGGIOS (tonic):</b><br>major: G♭, G, A♭, A, B♭, B<br>minor: F♯, G, A♭, A, B♭, B<br><br><b>ARPEGGIOS (dom 7th):</b><br>G♭, G, A♭, A, B♭, B major<br><br><b>ARPEGGIOS (dim 7th):</b><br>F♯, G, A♭, A, B♭, B minor",
        repertoire: "5 pieces<br><a href='https://dacapomusic.ca/rcm-piano-repertoire-all-pieces/#lvl10' target='_blank'>view song options</a>",
        etudes: "2 pieces<br><a href='https://dacapomusic.ca/rcm-piano-etudes-all-pieces/#lvl10' target='_blank'>view song options</a>",
        earTests: "<b>INTERVALS:</b><br>major 2nd, minor 2nd,<br> major 3rd, minor 3rd,<br> perfect 4th, aug 4th/dim 5th,<br> perfect 5th,<br> major 6th, minor 6th,<br> major 7th, minor 7th,<br> perfect 8ve,<br> major 9th, minor 9th<br><br><b>CHORDS:</b><br>major & minor 4-note chords,<br> augmented triads,<br> dominant 7th (major-minor 7th),<br> diminished 7th,<br>major-major7th,<br> minor-minor7th<br><br><b>CHORD PROGRESSIONS:</b><br>major: I, IV, V, vi (root position only), cadential 6/4<br>minor: i, iv, V, VI (root position only), cadential 6/4<br><br><b>PLAYBACK:</b><br>keys: any major or minor key,<br> up to 4 sharps or flats,<br>approx. length: 4 measures<br><br><b>RHYTHM:</b><br>a passage within playing excerpt<br><br><b>PLAYING:</b><br>major & minor keys,<br> up to 5 sharps or flats,<br>any time signature,<br> up to 16 measures"
    }
}





const selector = document.getElementById("selector");
const technical = document.getElementById("technical");
const repertoire = document.getElementById("repertoire");
const etudes = document.getElementById("etudes");
const earTests = document.getElementById("earTests");
const levelName = document.getElementById("level-name");


selector.addEventListener("change", showRequirements)



function showRequirements() {
    switch (selector.value) {

        case "initial":
            technical.innerHTML = "";
            repertoire.innerHTML = "";
            etudes.innerHTML = "";
            earTests.innerHTML = "";
            levelName.innerHTML = "Select a level to view requirements"
            break;

        case "prepA":
            technical.innerHTML = LEVELS.prepA.technical;
            repertoire.innerHTML = LEVELS.prepA.repertoire;
            etudes.innerHTML = LEVELS.prepA.etudes;
            earTests.innerHTML = LEVELS.prepA.earTests;
            levelName.innerHTML = "Preparatory A Piano"
            break;

        case "prepB":
            technical.innerHTML = LEVELS.prepB.technical;
            repertoire.innerHTML = LEVELS.prepB.repertoire;
            etudes.innerHTML = LEVELS.prepB.etudes;
            earTests.innerHTML = LEVELS.prepB.earTests;
            levelName.innerHTML = "Preparatory B Piano"
            break;

        case "lvl1":
            technical.innerHTML = LEVELS.lvl1.technical;
            repertoire.innerHTML = LEVELS.lvl1.repertoire;
            etudes.innerHTML = LEVELS.lvl1.etudes;
            earTests.innerHTML = LEVELS.lvl1.earTests;
            levelName.innerHTML = "Level 1 Piano"
            break;

        case "lvl2":
            technical.innerHTML = LEVELS.lvl2.technical;
            repertoire.innerHTML = LEVELS.lvl2.repertoire;
            etudes.innerHTML = LEVELS.lvl2.etudes;
            earTests.innerHTML = LEVELS.lvl2.earTests;
            levelName.innerHTML = "Level 2 Piano"
            break;

        case "lvl3":
            technical.innerHTML = LEVELS.lvl3.technical;
            repertoire.innerHTML = LEVELS.lvl3.repertoire;
            etudes.innerHTML = LEVELS.lvl3.etudes;
            earTests.innerHTML = LEVELS.lvl3.earTests;
            levelName.innerHTML = "Level 3 Piano"
            break;

        case "lvl4":
            technical.innerHTML = LEVELS.lvl4.technical;
            repertoire.innerHTML = LEVELS.lvl4.repertoire;
            etudes.innerHTML = LEVELS.lvl4.etudes;
            earTests.innerHTML = LEVELS.lvl4.earTests;
            levelName.innerHTML = "Level 4 Piano"
            break;

        case "lvl5":
            technical.innerHTML = LEVELS.lvl5.technical;
            repertoire.innerHTML = LEVELS.lvl5.repertoire;
            etudes.innerHTML = LEVELS.lvl5.etudes;
            earTests.innerHTML = LEVELS.lvl5.earTests;
            levelName.innerHTML = "Level 5 Piano"
            break;

        case "lvl6":
            technical.innerHTML = LEVELS.lvl6.technical;
            repertoire.innerHTML = LEVELS.lvl6.repertoire;
            etudes.innerHTML = LEVELS.lvl6.etudes;
            earTests.innerHTML = LEVELS.lvl6.earTests;
            levelName.innerHTML = "Level 6 Piano"
            break;

        case "lvl7":
            technical.innerHTML = LEVELS.lvl7.technical;
            repertoire.innerHTML = LEVELS.lvl7.repertoire;
            etudes.innerHTML = LEVELS.lvl7.etudes;
            earTests.innerHTML = LEVELS.lvl7.earTests;
            levelName.innerHTML = "Level 7 Piano"
            break;

        case "lvl8":
            technical.innerHTML = LEVELS.lvl8.technical;
            repertoire.innerHTML = LEVELS.lvl8.repertoire;
            etudes.innerHTML = LEVELS.lvl8.etudes;
            earTests.innerHTML = LEVELS.lvl8.earTests;
            levelName.innerHTML = "Level 8 Piano"
            break;

        case "lvl9":
            technical.innerHTML = LEVELS.lvl9.technical;
            repertoire.innerHTML = LEVELS.lvl9.repertoire;
            etudes.innerHTML = LEVELS.lvl9.etudes;
            earTests.innerHTML = LEVELS.lvl9.earTests;
            levelName.innerHTML = "Level 9 Piano"
            break;

        case "lvl10":
            technical.innerHTML = LEVELS.lvl10.technical;
            repertoire.innerHTML = LEVELS.lvl10.repertoire;
            etudes.innerHTML = LEVELS.lvl10.etudes;
            earTests.innerHTML = LEVELS.lvl10.earTests;
            levelName.innerHTML = "Level 10 Piano"
            break;
    }
}
