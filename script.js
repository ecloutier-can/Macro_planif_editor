document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('planif-text');
    const saveBtn = document.getElementById('save-btn');
    const output = document.getElementById('output');

    // Charger le contenu sauvegardé depuis localStorage
    const savedContent = localStorage.getItem('macroPlanif');
    if (savedContent) {
        textarea.value = savedContent;
    }

    // Sauvegarder le contenu
    saveBtn.addEventListener('click', function() {
        const content = textarea.value;
        localStorage.setItem('macroPlanif', content);
        output.textContent = 'Contenu sauvegardé !';
        setTimeout(() => {
            output.textContent = '';
        }, 2000);
    });

    // Afficher un aperçu ou traiter le contenu (exemple simple)
    textarea.addEventListener('input', function() {
        // Ici, vous pouvez ajouter une logique pour analyser la macro planification
        // Par exemple, compter les mots ou valider le format
        const wordCount = content.split(' ').length;
        output.textContent = `Mots : ${wordCount}`;
    });
});