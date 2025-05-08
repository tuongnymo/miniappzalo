fetch('example.json')
    .then(response => response.json())
    .then(data => {
        const productList = document.getElementById('product-list');
        data.products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product-item');

            const productImage = document.createElement('img');
            productImage.src = product.image;
            productDiv.appendChild(productImage);

            const productName = document.createElement('h3');
            productName.textContent = product.name;
            productDiv.appendChild(productName);

            const productPrice = document.createElement('p');
            productPrice.classList.add('price');
            productPrice.textContent = `${product.price} VND`;
            productDiv.appendChild(productPrice);

            productList.appendChild(productDiv);
        });
    })
    .catch(error => console.log('Error loading product data:', error));
