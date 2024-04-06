<script>
       
        console.log('Site carregado com sucesso!');

      
    </script>
   window.addEventListener('load', function() {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.carrossel img');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    function updateImageDisplay() {
        images.forEach((img, index) => {
            img.classList.remove('active');
            if(index === currentImageIndex) {
                img.classList.add('active');
            }
        });
    }

    nextButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImageDisplay();
    });

    prevButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImageDisplay();
    });
    
    updateImageDisplay(); 
})