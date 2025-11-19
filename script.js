// script.js file

document.getElementById('download-btn').addEventListener('click', function() {
    const linkInput = document.getElementById('tiktok-link');
    const statusDiv = document.getElementById('status-message');
    const downloadBtn = document.getElementById('download-btn');
    
    const tiktokLink = linkInput.value.trim();

    if (tiktokLink === '') {
        statusDiv.textContent = "Fadlan geli linkiga TikTok-ga si aad u bilowdo.";
        return;
    }

    if (!tiktokLink.includes('tiktok.com')) {
        statusDiv.textContent = "Fadlan geli link sax ah oo TikTok ah.";
        return;
    }

    // 1. Bilow muujinta Downloading...
    statusDiv.textContent = "Downloading... Fadlan Sug ⏳";
    downloadBtn.disabled = true; // Badhanka ha shaqeyn inta la sugayo

    // Tusaale ahaan, Sug 3 ilbiriqsi ka hor inta aadan soo dejinta isku dayin
    setTimeout(() => {
        // 2. Tallaabada Soo-dejinta (Waa Tusaale oo kaliya!)
        
        // Halkan waxaan ku isticmaalaynaa linki tusaale ah (dummy URL).
        // Si dhab ah loo soo dejiyo, halkaan waa in lagu jiraa linki uu bixiyo server-kaaga!
        const finalDownloadURL = "https://example.com/video-downloaded.mp4"; 
        
        // Samee linki soo-dejinta qarsoon
        const a = document.createElement('a');
        a.href = finalDownloadURL;
        a.download = 'tiktok_video.mp4'; // Magaca faylka
        
        // Ku dar document-iga, taabo, kadibna ka saar
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // U sheeg user-ka inuu soo degay/bilaabmay
        statusDiv.textContent = "Soo-dejinta ayaa bilowday. Fiidiyowgaagu wuxuu ku jiraa Gallery-ga (ama Downloads Folder) hadda. ✅";
        
        // Dib u hagaaji badhamada
        downloadBtn.disabled = false;
        linkInput.value = ''; // Nadiifi linkiga

    }, 3000); // 3000ms = 3 ilbiriqsi
});
