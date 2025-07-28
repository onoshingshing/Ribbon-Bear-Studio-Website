// script.js

window.addEventListener('DOMContentLoaded', function() {
    // �X�M�H�� pastel �m�i��
    const colors = [
        "#FFF9C4", // �H��
        "#B5EAD7", // ������
        "#C7CEEA", // ���ŵ�
        "#FFDAC1", // �H��
        "#F8BBD0", // ����
        "#B5D2EA", // �Ѫ���
        "#E2F0CB"  // �H�C
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