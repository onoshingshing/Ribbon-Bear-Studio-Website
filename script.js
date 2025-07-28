// script.js

window.addEventListener('DOMContentLoaded', function() {
    // ¬X©M²H¦â pastel ±m­i¦â
    const colors = [
        "#FFF9C4", // ²H¶À
        "#B5EAD7", // Á¡²üºñ
        "#C7CEEA", // ¯»ÂÅµµ
        "#FFDAC1", // ²H¾í
        "#F8BBD0", // ¯»¬õ
        "#B5D2EA", // ¤ÑªÅÂÅ
        "#E2F0CB"  // ²H«C
    ];

    function shuffle(arr) {
        let array = arr.slice();
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    document.querySelectorAll('.photo-caption').forEach(function(caption) {
        const rainbow = shuffle(colors);
        caption.style.background = `linear-gradient(90deg, ${rainbow.join(', ')})`;
    });
});