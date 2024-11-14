document.addEventListener("DOMContentLoaded", function() {
        const style = document.createElement("style");
        style.innerHTML = `
            body {
                font-family: Arial, sans-serif;
                text-align: center;
                background-color: #f9f9f9;
            }
    
            form {
                max-width: 500px;
                margin: 20px auto;
                display: flex;
                flex-direction: column;
            }
    
            form label {
                margin-top: 10px;
            }
    
            form input {
                padding: 10px;
                margin: 5px 0;
                border: 1px solid #ccc;
                border-radius: 4px;
            }
    
            button {
                padding: 10px;
                background-color: #007bff;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
    
            button:hover {
                background-color: #0056b3;
            }
    
            #addButton {
                width: 60px;
                height: 35px;
                text-align: center;
                background-color: #28a844; 
                color: white;
                font-size: 16px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
    
            #addButton:hover {
                background-color: #218838;
            }
    
            #productsContainer {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 20px;
            }
    
            .product-card {
                border: 1px solid #ddd;
                border-radius: 4px;
                padding: 15px;
                width: 200px;
                text-align: center;
                background-color: white;
            }
    
            .product-card img {
                max-width: 100%;
                height: auto;
                border-radius: 4px;
            }
    
            .modal {
                display: none;
                position: fixed;
                z-index: 1;
                padding-top: 100px;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
            }
    
            .modal-content {
                background-color: #fff;
                margin: auto;
                padding: 20px;
                border-radius: 8px;
                width: 80%;
                max-width: 400px;
                max-height: 1000px;
                text-align: center;
            }
    
            #animatedCloseButton {
                display: flex;
                align-items: center;
                justify-content: center;
            }
    
            .close-button {
                position: relative;
                width: 80px;
                height: 80px;
                border-radius: 50%;
                border: 2px solid #ff0000;
                background-color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }
    
            .close-button .line {
                position: absolute;
                width: 60px;
                height: 3px;
                background-color: #ff0000;
                transition: transform 0.3s;
                animation: pulse 2s infinite;
            }
    
            .line1 {
                transform: rotate(45deg);
            }
    
            .line2 {
                transform: rotate(-45deg);
            }
    
            .close-button:hover .line1 {
                transform: rotate(135deg);
            }
    
            .close-button:hover .line2 {
                transform: rotate(-135deg);
            }
    
            .a {
                margin-top: 20px;
                padding: 20px;
                border-top: 1px solid rgb(236, 234, 234);
            }
    
            .close {
                color: #aaa;
                float: right;
                font-size: 28px;
                font-weight: bold;
            }
    
            .close:hover,
            .close:focus {
                color: black;
                cursor: pointer;
            }
    
            .modal {
                display: none; /* Hidden by default */
                position: fixed;
                z-index: 100;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.4);
            }
    
            .modal-content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: white;
                padding: 20px;
                border-radius: 10px;
                text-align: center;
                width: 300px;
            }
    
            .modal-ok-button {
                background-color: #007bff;
                color: white;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
    
            .modal-ok-button:hover {
                background-color: #0056b3;
            }
    
            .success-icon {
                font-size: 24px;
                color: green;
                margin-bottom: 10px;
            }
        `;
        document.head.appendChild(style);
    
    const body = document.querySelector("body");

    const header = document.createElement("h1");
    header.textContent = "Add Form";
    body.appendChild(header);

    const form = document.createElement("form");
    form.id = "productForm";

    const fields = [
        { label: "Title", id: "title", type: "text", placeholder: "title" },
        { label: "Price", id: "price", type: "number", placeholder: "price" },
        { label: "Description", id: "description", type: "text", placeholder: "description" },
        { label: "Image", id: "image", type: "text", placeholder: "image" }
    ];

    fields.forEach(field => {
        const label = document.createElement("label");
        label.textContent = field.label;
        form.appendChild(label);

        const input = document.createElement("input");
        input.type = field.type;
        input.id = field.id;
        input.placeholder = field.placeholder;
        input.required = true;
        form.appendChild(input);
    });

    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.id = "addButton";
    addButton.textContent = "Add";
    form.appendChild(addButton);

    body.appendChild(form);

    // Products Header
    const productsHeader = document.createElement("h2");
    productsHeader.textContent = "Products";
    body.appendChild(productsHeader);

    // Products Container
    const productsContainer = document.createElement("div");
    productsContainer.id = "productsContainer";
    body.appendChild(productsContainer);

    // Confirmation Modal
    const confirmModal = document.createElement("div");
    confirmModal.id = "confirmModal";
    confirmModal.classList.add("modal");

    const confirmContent = document.createElement("div");
    confirmContent.classList.add("modal-content");

    const warningIcon = document.createElement("div");
    warningIcon.classList.add("warning-icon");
    warningIcon.innerHTML = "&#10060;";
    confirmContent.appendChild(warningIcon);

    const confirmText1 = document.createElement("p");
    confirmText1.textContent = "Are you sure?";
    confirmContent.appendChild(confirmText1);

    const confirmText2 = document.createElement("p");
    confirmText2.textContent = "You won't be able to revert this!";
    confirmContent.appendChild(confirmText2);

    const confirmDeleteButton = document.createElement("button");
    confirmDeleteButton.id = "confirmDelete";
    confirmDeleteButton.classList.add("modal-delete-button");
    confirmDeleteButton.textContent = "Yes, delete it!";
    confirmContent.appendChild(confirmDeleteButton);

    const cancelDeleteButton = document.createElement("button");
    cancelDeleteButton.id = "cancelDelete";
    cancelDeleteButton.classList.add("modal-cancel-button");
    cancelDeleteButton.textContent = "Cancel";
    confirmContent.appendChild(cancelDeleteButton);

    confirmModal.appendChild(confirmContent);
    body.appendChild(confirmModal);

    const successModal = document.createElement("div");
    successModal.id = "successModal";
    successModal.classList.add("modal");

    const successContent = document.createElement("div");
    successContent.classList.add("modal-content");

    const successIcon = document.createElement("div");
    successIcon.classList.add("success-icon");
    successIcon.innerHTML = "&#10004;";
    successContent.appendChild(successIcon);

    const successText = document.createElement("p");
    successText.textContent = "Deleted successfully";
    successContent.appendChild(successText);

    const closeSuccessModalButton = document.createElement("button");
    closeSuccessModalButton.id = "closeSuccessModal";
    closeSuccessModalButton.classList.add("modal-ok-button");
    closeSuccessModalButton.textContent = "OK";
    successContent.appendChild(closeSuccessModalButton);

    successModal.appendChild(successContent);
    body.appendChild(successModal);

    const errorModal = document.createElement("div");
    errorModal.id = "errorModal";
    errorModal.classList.add("modal");

    const errorContent = document.createElement("div");
    errorContent.classList.add("modal-content");

    const closeSpan = document.createElement("span");
    closeSpan.classList.add("close");
    closeSpan.innerHTML = "&times;";
    errorContent.appendChild(closeSpan);

    const animatedCloseButton = document.createElement("div");
    animatedCloseButton.id = "animatedCloseButton";
    animatedCloseButton.classList.add("close-button");

    const line1 = document.createElement("span");
    line1.classList.add("line", "line1");
    animatedCloseButton.appendChild(line1);

    const line2 = document.createElement("span");
    line2.classList.add("line", "line2");
    animatedCloseButton.appendChild(line2);

    errorContent.appendChild(animatedCloseButton);

    const errorHeader = document.createElement("h2");
    errorHeader.textContent = "Oops...";
    errorContent.appendChild(errorHeader);

    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Inputları tam doldurun";
    errorContent.appendChild(errorMessage);

    const okButton = document.createElement("button");
    okButton.id = "okButton";
    okButton.textContent = "OK";
    errorContent.appendChild(okButton);

    const aLink = document.createElement("div");
    aLink.classList.add("a");

    const link = document.createElement("a");
    link.href = "#";
    link.textContent = "Why do I have this issue?";
    aLink.appendChild(link);

    errorContent.appendChild(aLink);
    errorModal.appendChild(errorContent);
    body.appendChild(errorModal);
});
