// script.js file

document.getElementById('download-btn').addEventListener('click', function() {
    const linkInput = document.getElementById('tiktok-link');
    const tiktokLink = linkInput.value.trim();

    if (tiktokLink === '') {
        alert("Fadlan geli linkiga TikTok-ga!");
        return;
    }

    if (!tiktokLink.includes('tiktok.com')) {
        alert("Fadlan geli link sax ah oo TikTok ah.");
        return;
    }

    // Tani waa fariin tijaabo ah. Shaqada dhabta ah waxay u baahan tahay server API.
    alert(`Linkiga la helay: ${tiktokLink}. Hadda waxaa loo dirayaa server-ka si loo soo dejiyo...`);
    
    // Haddii aad rabto, halkan waxaad kaga saari kartaa linkiga sanduuqa ka dib markii la riixo:
    // linkInput.value = ''; 
});
