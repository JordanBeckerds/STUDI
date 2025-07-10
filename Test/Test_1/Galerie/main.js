document.addEventListener('DOMContentLoaded', function() {
    const categorySelect = document.getElementById('categorySelect');
    const gallery = document.querySelector('.gallery');
  
    // Define image filenames for each category
    const imageFilenames = {
      Mariage: ['mariage[1].jpg', 'mariage[2].jpg', 'mariage[3].jpg', 'mariage[4].jpg', 'mariage[5].jpg'],
      Grossesse: ['grossesse[1].jpg', 'grossesse[2].jpg', 'grossesse[3].jpg', 'grossesse[4].jpg', 'grossesse[5].jpg'],
      Bébé: ['bebe[1].jpg', 'bebe[2].jpg', 'bebe[3].jpg', 'bebe[4].jpg', 'bebe[5].jpg'],
      Famille: ['famille[1].jpg', 'famille[2].jpg', 'famille[3].jpg', 'famille[4].jpg', 'famille[5].jpg'],
      Baptême: ['bapteme[1].jpg', 'bapteme[2].jpg', 'bapteme[3].jpg', 'bapteme[4].jpg', 'bapteme[5].jpg'],
      Couple: ['couple[1].jpg', 'couple[2].jpg', 'couple[3].jpg', 'couple[4].jpg', 'couple[5].jpg']
    };
  
    // Function to display images based on selected category
    function displayImages(category) {
      gallery.innerHTML = '';
      if (category === '') {
        // Show all categories
        for (const category in imageFilenames) {
          imageFilenames[category].forEach(filename => {
            const img = document.createElement('img');
            img.src = 'img/' + filename;
            img.alt = category + ' Image';
            img.classList.add('img');
            gallery.appendChild(img);
          });
        }
      } else {
        // Show selected category
        imageFilenames[category].forEach(filename => {
          const img = document.createElement('img');
          img.src = 'img/' + filename;
          img.alt = category + ' Image';
          img.classList.add('img');
          gallery.appendChild(img);
        });
      }
    }
  
    // Event listener for category selection change
    categorySelect.addEventListener('change', function() {
      const selectedCategory = categorySelect.value;
      displayImages(selectedCategory);
    });
  
    // Initially display all categories
    displayImages('');
  });  