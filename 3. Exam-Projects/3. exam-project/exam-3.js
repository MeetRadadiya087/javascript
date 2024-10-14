document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('product-form');
    const productList = document.getElementById('product-list');
    let products = JSON.parse(localStorage.getItem('products')) || [];

    function renderProducts() {
        productList.innerHTML = '';
        products.forEach((product, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${product.name} - $${product.price} 
                <button onclick="editProduct(${index})">Edit</button>
                <button onclick="deleteProduct(${index})">Delete</button>`;
            productList.appendChild(li);
        });
    }

    window.editProduct = (index) => {
        const product = products[index];
        document.getElementById('product-name').value = product.name;
        document.getElementById('product-price').value = product.price;
        productForm.dataset.index = index; // Store index for editing
    };

    window.deleteProduct = (index) => {
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
        renderProducts();
    };

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('product-name').value;
        const price = document.getElementById('product-price').value;
        const index = productForm.dataset.index;

        if (index) {
            products[index] = { name, price };
            delete productForm.dataset.index; // Clear index after editing
        } else {
            products.push({ name, price });
        }

        localStorage.setItem('products', JSON.stringify(products));
        productForm.reset();
        renderProducts();
    });

    renderProducts();
});
