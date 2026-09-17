document.addEventListener("DOMContentLoaded", () => {

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});
/* =========================
   DARK MODE
========================= */

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeBtn.textContent = "☀️";
        } else {
            themeBtn.textContent = "🌙";
        }

    });

}

    /* =========================================================
       2. VISUAL STYLING
       Keeps your body color and makes dashboard
       soft white/cream + yellow
       ========================================================= */

    const dynamicCSS = document.createElement("style");

    dynamicCSS.textContent = `

        /* ================= NAV ================= */

        #navLinks a {
            transition: all .25s ease;
        }

        #navLinks a:hover {
            background: #fffdf2 !important;
            color: #181717 !important;
            transform: translateY(-2px);
            box-shadow: 0 3px 10px rgba(0,0,0,.08);
        }

        #navLinks a.active {
            background: #fffdf2 !important;
            color: #181717 !important;
            border: 1px solid #e6d66a;
            box-shadow: 0 3px 10px rgba(0,0,0,.08);
        }


        /* ================= MOBILE NAV ================= */

        @media (max-width: 768px) {

            #navLinks.active {
                display: flex !important;
                opacity: 1 !important;
                visibility: visible !important;
            }

        }


        /* ================= SELLER DASHBOARD ================= */

        #seller {
            background: transparent;
        }

        #seller .dashboard {
            color: #181717;
        }


        #seller .head button {

            background: #fffdf2 !important;

            color: #181717 !important;

            border: 1px solid #e6d66a !important;

            box-shadow:
                0 3px 10px rgba(0,0,0,.07);

            transition: all .25s ease;

        }


        #seller .head button:hover {

            background: #fff7c7 !important;

            transform: translateY(-2px);

            box-shadow:
                0 5px 14px rgba(0,0,0,.10);

        }


        /* KPI */

        #seller .kpi {

            background: #fffef8 !important;

            border: 1px solid #eee5a8 !important;

            box-shadow:
                0 3px 12px rgba(0,0,0,.05);

        }


        /* PANELS */

        #seller .panel {

            background: #fffefb !important;

            border: 1px solid #eee7b5 !important;

            box-shadow:
                0 4px 14px rgba(0,0,0,.05);

        }


        /* SELLER BUTTONS */

        #seller .row button {

            background: #fffdf4 !important;

            color: #181717 !important;

            border: 1px solid #e8dc85 !important;

            transition: all .25s ease;

        }


        #seller .row button:hover {

            background: #fff7c7 !important;

            color: #181717 !important;

            transform: translateY(-1px);

        }


        /* ADD PROPERTY */

        #add button[type="submit"] {

            background: #fffdf2 !important;

            color: #181717 !important;

            border: 1px solid #e6d66a !important;

        }


        #add button[type="submit"]:hover {

            background: #fff7c7 !important;

        }


        /* ================= AUTH ================= */

        #auth button {

            background: #fffdf2 !important;

            color: #181717 !important;

            border: 1px solid #e6d66a !important;

            transition: all .25s ease;

        }


        #auth button:hover {

            background: #fff7c7 !important;

            transform: translateY(-1px);

        }


        #auth b {

            cursor: pointer;

            transition: all .2s ease;

        }


        #auth b:hover {

            color: #a48a00;

        }


        /* ================= SIGNUP MODAL ================= */

        #signupModal {

            position: fixed;

            inset: 0;

            background: rgba(24,23,23,.45);

            display: none;

            align-items: center;

            justify-content: center;

            z-index: 9999;

            padding: 20px;

        }


        #signupModal.active {

            display: flex;

        }


        #signupModal .signup-box {

            width: min(420px, 100%);

            background: #fffefb;

            border: 1px solid #eee5a8;

            border-radius: 14px;

            padding: 25px;

            box-shadow: 0 15px 45px rgba(0,0,0,.15);

        }


        #signupModal input {

            width: 100%;

            box-sizing: border-box;

            padding: 11px;

            margin: 7px 0 15px;

            border: 1px solid #ddd7a0;

            border-radius: 8px;

            background: #fffefb;

        }


        #signupModal button {

            background: #fffdf2;

            color: #181717;

            border: 1px solid #e6d66a;

            border-radius: 8px;

            padding: 10px 15px;

            cursor: pointer;

        }


        #signupModal button:hover {

            background: #fff7c7;

        }


        #signupClose {

            float: right;

            cursor: pointer;

            font-size: 22px;

        }


        /* ================= MESSAGES ================= */

        #messages .panel {

            background: #fffefb;

            border: 1px solid #eee7b5;

        }


        #messages .row {

            cursor: pointer;

            transition: background .2s ease;

            border-radius: 8px;

            padding: 8px;

        }


        #messages .row:hover {

            background: #fffdf2;

        }


        #messages #msg {

            width: 100%;

            min-height: 100px;

            box-sizing: border-box;

            resize: vertical;

            background: #fffefb;

            border: 1px solid #e8dc85;

            color: #181717;

        }


        #messages button {

            background: #fffdf2 !important;

            color: #181717 !important;

            border: 1px solid #e6d66a !important;

            transition: all .2s ease;

        }


        #messages button:hover {

            background: #fff7c7 !important;

            transform: translateY(-1px);

        }


        /* ================= DETAIL MODAL ================= */

        #detail button {

            background: #fffdf2 !important;

            color: #181717 !important;

            border: 1px solid #e6d66a !important;

        }


        #detail button:hover {

            background: #fff7c7 !important;

        }

    `;

    document.head.appendChild(dynamicCSS);


    /* =========================================================
       3. SIGN IN
       ========================================================= */

    const auth = document.getElementById("auth");

    let signedIn = false;


    if (auth) {

        const signInButton =
            Array.from(auth.querySelectorAll("button"))
                .find(function (button) {

                    return button.textContent
                        .trim()
                        .toLowerCase()
                        .includes("sign in");

                });


        if (signInButton) {

            signInButton.addEventListener("click", function (e) {

                e.preventDefault();

                const email =
                    auth.querySelector('input[type="email"]');

                const password =
                    auth.querySelector('input[type="password"]');


                if (!email || !email.value.trim()) {

                    alert("Please enter your email.");

                    email?.focus();

                    return;

                }


                if (!password || !password.value.trim()) {

                    alert("Please enter your password.");

                    password?.focus();

                    return;

                }


                signedIn = true;


                // Save simple login state
                localStorage.setItem(
                    "alphaSignedIn",
                    "true"
                );

                localStorage.setItem(
                    "alphaUserEmail",
                    email.value.trim()
                );


                alert(
                    "Welcome to Alpha Real Estate Marketplace!"
                );


                // Change welcome heading
                const welcome =
                    auth.querySelector("h2");

                if (welcome) {

                    welcome.textContent =
                        "Welcome back!";

                }

            });

        }


        /* =====================================================
           4. CREATE ACCOUNT
           ===================================================== */

        const createAccount =
            Array.from(auth.querySelectorAll("b"))
                .find(function (element) {

                    return element.textContent
                        .toLowerCase()
                        .includes("create an account");

                });


        if (createAccount) {

            createAccount.addEventListener(
                "click",
                function () {

                    openSignup();

                }
            );

        }

    }


    /* =========================================================
       5. SIGN UP MODAL
       ========================================================= */

    function createSignupModal() {

        if (document.getElementById("signupModal")) {
            return;
        }


        const modal =
            document.createElement("div");

        modal.id = "signupModal";


        modal.innerHTML = `

            <div class="signup-box">

                <span id="signupClose">×</span>

                <h2>Create an account</h2>

                <p>
                    Join Alpha Real Estate Marketplace.
                </p>

                <label>
                    Full name
                </label>

                <input
                    id="signupName"
                    type="text"
                    placeholder="Your name"
                >

                <label>
                    Email
                </label>

                <input
                    id="signupEmail"
                    type="email"
                    placeholder="you@example.com"
                >

                <label>
                    Password
                </label>

                <input
                    id="signupPassword"
                    type="password"
                    placeholder="Create a password"
                >

                <button id="createAccountBtn">
                    Create account
                </button>

            </div>

        `;


        document.body.appendChild(modal);


        document
            .getElementById("signupClose")
            .addEventListener("click", closeSignup);


        modal.addEventListener("click", function (e) {

            if (e.target === modal) {

                closeSignup();

            }

        });


        document
            .getElementById("createAccountBtn")
            .addEventListener("click", function () {

                const name =
                    document
                        .getElementById("signupName")
                        .value.trim();

                const email =
                    document
                        .getElementById("signupEmail")
                        .value.trim();

                const password =
                    document
                        .getElementById("signupPassword")
                        .value.trim();


                if (!name) {

                    alert("Please enter your name.");

                    return;

                }


                if (!email) {

                    alert("Please enter your email.");

                    return;

                }


                if (!password) {

                    alert("Please create a password.");

                    return;

                }


                localStorage.setItem(
                    "alphaUserName",
                    name
                );

                localStorage.setItem(
                    "alphaUserEmail",
                    email
                );

                localStorage.setItem(
                    "alphaAccountCreated",
                    "true"
                );


                alert(
                    "Account created successfully!"
                );


                closeSignup();


                // Put email into sign-in form
                if (auth) {

                    const emailInput =
                        auth.querySelector(
                            'input[type="email"]'
                        );

                    if (emailInput) {

                        emailInput.value = email;

                    }

                }

            });

    }


    function openSignup() {

        createSignupModal();

        const modal =
            document.getElementById("signupModal");

        modal.classList.add("active");

    }


    function closeSignup() {

        const modal =
            document.getElementById("signupModal");

        if (modal) {

            modal.classList.remove("active");

        }

    }


    /* =========================================================
       6. SELLER DASHBOARD
       ========================================================= */

    const seller =
        document.getElementById("seller");


    if (seller) {

        // Your CSS hides main by default,
        // so explicitly activate the seller dashboard.
        seller.classList.add("active");

        seller.style.display = "block";

    }


    /* =========================================================
       7. ADD PROPERTY
       ========================================================= */

    const addModal =
        document.getElementById("add");


    let addPropertyButton = null;


    if (seller) {

        addPropertyButton =
            Array.from(
                seller.querySelectorAll("button")
            ).find(function (button) {

                return button.textContent
                    .toLowerCase()
                    .includes("add property");

            });

    }


    if (addPropertyButton && addModal) {

        addPropertyButton.addEventListener(
            "click",
            function () {

                addModal.classList.add("active");

                addModal.style.display = "flex";

            }
        );

    }


    /* =========================================================
       8. CLOSE ADD PROPERTY
       ========================================================= */

    if (addModal) {

        addModal.addEventListener(
            "click",
            function (e) {

                const close =
                    e.target.closest("button");


                // × close button
                if (
                    close &&
                    close.textContent.trim() === "×"
                ) {

                    closeAddModal();

                    return;

                }


                if (e.target === addModal) {

                    closeAddModal();

                }

            }
        );

    }


    function closeAddModal() {

        if (!addModal) return;

        addModal.classList.remove("active");

        addModal.style.display = "none";

    }


    /* =========================================================
       9. PUBLISH PROPERTY
       ========================================================= */

    if (addModal) {

        const form =
            addModal.querySelector("form");


        if (form) {

            form.addEventListener(
                "submit",
                function (e) {

                    e.preventDefault();


                    const inputs =
                        form.querySelectorAll(
                            "input, select, textarea"
                        );


                    const title =
                        inputs[0]?.value.trim();


                    if (!title) {

                        alert(
                            "Please enter a property title."
                        );

                        return;

                    }


                    alert(
                        "Property published successfully!"
                    );


                    form.reset();

                    closeAddModal();

                }
            );

        }

    }


    /* =========================================================
       10. PROPERTY DETAILS
       ========================================================= */

    const detail =
        document.getElementById("detail");

    const detailBody =
        document.getElementById("detailBody");


    function showPropertyDetails(card) {

        if (!detail || !card) return;


        const image =
            card.querySelector("img");


        const title =
            card.querySelector("h3");


        const price =
            card.querySelector(".price");


        const location =
            card.querySelector(".location");


        const meta =
            card.querySelector(".meta");


        if (detailBody) {

            detailBody.innerHTML = `

                ${
                    image
                        ? `
                        <img
                            src="${image.src}"
                            alt="${title ? title.textContent : "Property"}"
                            style="
                                width:100%;
                                max-height:350px;
                                object-fit:cover;
                                border-radius:12px;
                                margin-bottom:15px;
                            "
                        >
                        `
                        : ""
                }

                ${
                    price
                        ? `<h2>${price.textContent}</h2>`
                        : ""
                }

                ${
                    title
                        ? `<h3>${title.textContent}</h3>`
                        : ""
                }

                ${
                    location
                        ? `<p>${location.textContent}</p>`
                        : ""
                }

                ${
                    meta
                        ? `<p>${meta.textContent}</p>`
                        : ""
                }

                <button data-action="viewing">
                    Request a view
                </button>

                <button data-action="contact">
                    Contact seller
                </button>

                <button data-action="save-photo">
                    Save photo
                </button>

            `;

        }


        detail.classList.add("active");

        detail.style.display = "flex";

    }


    document.addEventListener(
        "click",
        function (e) {

            const button =
                e.target.closest("button");

            if (!button) return;


            if (
                button.textContent
                    .trim()
                    .toLowerCase() === "view details"
            ) {

                const card =
                    button.closest(".card");

                showPropertyDetails(card);

            }

        }
    );


    /* =========================================================
       11. CLOSE PROPERTY DETAILS
       ========================================================= */

    if (detail) {

        detail.addEventListener(
            "click",
            function (e) {

                const button =
                    e.target.closest("button");


                if (
                    button &&
                    button.textContent.trim() === "×"
                ) {

                    detail.classList.remove("active");

                    detail.style.display = "none";

                    return;

                }


                if (e.target === detail) {

                    detail.classList.remove("active");

                    detail.style.display = "none";

                }

            }
        );

    }


    /* =========================================================
       12. DETAIL ACTIONS
       ========================================================= */

    document.addEventListener(
        "click",
        function (e) {

            const action =
                e.target.closest("[data-action]");

            if (!action) return;


            const type =
                action.dataset.action;


            if (type === "viewing") {

                alert(
                    "Your viewing request has been sent!"
                );

            }


            if (type === "contact") {

                alert(
                    "You can now contact the seller."
                );

            }


            if (type === "save-photo") {

                alert(
                    "Property photo saved!"
                );

            }

        }
    );


    /* =========================================================
       13. SEARCH
       ========================================================= */

    const searchInput =
        document.getElementById("q");

    const propertyType =
        document.getElementById("type");


    let searchButton = null;


    document.querySelectorAll("button").forEach(
        function (button) {

            if (
                button.textContent
                    .trim()
                    .toLowerCase() === "search"
            ) {

                searchButton = button;

            }

        }
    );


    function searchProperties() {

        const cards =
            document.querySelectorAll(
                "#cards .card"
            );


        const query =
            searchInput
                ? searchInput.value
                    .trim()
                    .toLowerCase()
                : "";


        const type =
            propertyType
                ? propertyType.value
                    .trim()
                    .toLowerCase()
                : "all";


        cards.forEach(function (card) {

            const text =
                card.textContent
                    .toLowerCase();


            const queryMatch =
                query === "" ||
                text.includes(query);


            const typeMatch =
                type === "all" ||
                text.includes(type);


            card.style.display =
                queryMatch && typeMatch
                    ? ""
                    : "none";

        });

    }


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            searchProperties
        );

    }


    if (searchInput) {

        searchInput.addEventListener(
            "keydown",
            function (e) {

                if (e.key === "Enter") {

                    searchProperties();

                }

            }
        );

    }


    if (propertyType) {

        propertyType.addEventListener(
            "change",
            searchProperties
        );

    }


    /* =========================================================
       14. FAVORITES
       ========================================================= */

    let favorites =
        JSON.parse(
            localStorage.getItem(
                "alphaFavorites"
            ) || "[]"
        );


    document.querySelectorAll(".heart")
        .forEach(function (heart) {

            const card =
                heart.closest(".card");


            heart.addEventListener(
                "click",
                function () {

                    if (!card) return;


                    const title =
                        card.querySelector("h3");


                    if (!title) return;


                    const name =
                        title.textContent.trim();


                    if (
                        favorites.includes(name)
                    ) {

                        favorites =
                            favorites.filter(
                                item =>
                                    item !== name
                            );

                        heart.textContent = "♡";

                    } else {

                        favorites.push(name);

                        heart.textContent = "♥";

                    }


                    localStorage.setItem(
                        "alphaFavorites",
                        JSON.stringify(favorites)
                    );

                }
            );

        });


    /* =========================================================
       15. COMPARE
       ========================================================= */

    let compareList = [];


    const compareBar =
        document.getElementById("comparebar");


    const compareNum =
        document.getElementById("compareNum");


    function updateCompare() {

        if (compareNum) {

            compareNum.textContent =
                compareList.length;

        }


        if (compareBar) {

            if (compareList.length > 0) {

                compareBar.style.display =
                    "flex";

            } else {

                compareBar.style.display =
                    "none";

            }

        }

    }


    document.addEventListener(
        "click",
        function (e) {

            const button =
                e.target.closest("button");

            if (!button) return;


            if (
                button.textContent
                    .trim()
                    .toLowerCase() !== "compare"
            ) {
                return;
            }


            const card =
                button.closest(".card");


            if (!card) return;


            const title =
                card.querySelector("h3");


            if (!title) return;


            const name =
                title.textContent.trim();


            if (
                compareList.includes(name)
            ) {

                compareList =
                    compareList.filter(
                        item =>
                            item !== name
                    );

                button.classList.remove(
                    "active"
                );

            } else {

                if (compareList.length >= 3) {

                    alert(
                        "You can compare up to 3 properties."
                    );

                    return;

                }


                compareList.push(name);

                button.classList.add(
                    "active"
                );

            }


            updateCompare();

        }
    );


    /* =========================================================
       16. CLEAR COMPARE
       ========================================================= */

    document.querySelectorAll("button")
        .forEach(function (button) {

            if (
                button.textContent
                    .trim()
                    .toLowerCase() === "clear"
            ) {

                button.addEventListener(
                    "click",
                    function () {

                        compareList = [];

                        document
                            .querySelectorAll(
                                ".actions button.active"
                            )
                            .forEach(
                                function (btn) {

                                    btn.classList
                                        .remove("active");

                                }
                            );

                        updateCompare();

                    }
                );

            }

        });


    /* =========================================================
       17. MESSAGES
       Based directly on your existing HTML:
       #messages
       .panel
       .row
       #msg
       Send message
       ========================================================= */

    const messages =
        document.getElementById("messages");


    const messageInput =
        document.getElementById("msg");


    if (messages && messageInput) {

        const sendMessageButton =
            Array.from(
                messages.querySelectorAll("button")
            ).find(function (button) {

                return button.textContent
                    .trim()
                    .toLowerCase() === "send message";

            });


        if (sendMessageButton) {

            sendMessageButton.addEventListener(
                "click",
                function () {

                    const message =
                        messageInput.value.trim();


                    if (!message) {

                        alert(
                            "Please write a message first."
                        );

                        messageInput.focus();

                        return;

                    }


                    /*
                       Find the conversations panel.
                    */

                    const panels =
                        messages.querySelectorAll(
                            ".panel"
                        );


                    const conversations =
                        panels[0];


                    if (conversations) {

                        const newMessage =
                            document.createElement("div");


                        newMessage.className =
                            "row";


                        newMessage.innerHTML = `

                            <div class="avatar">
                                ME
                            </div>

                            <div>

                                <b>
                                    You
                                </b>

                                <p>
                                    ${escapeHTML(message)}
                                </p>

                            </div>

                        `;


                        conversations.appendChild(
                            newMessage
                        );

                    }


                    messageInput.value = "";


                    alert(
                        "Message sent successfully!"
                    );

                }
            );

        }


        /* =====================================================
           CLICK EXISTING CONVERSATION
           ===================================================== */

        const conversationRows =
            messages.querySelectorAll(
                ".panel:first-child .row"
            );


        conversationRows.forEach(
            function (row) {

                row.addEventListener(
                    "click",
                    function () {

                        const person =
                            row.querySelector("b");


                        const personName =
                            person
                                ? person.textContent.trim()
                                : "seller";


                        messageInput.focus();

                        messageInput.placeholder =
                            "Reply to " +
                            personName +
                            "...";

                    }
                );

            }
        );

    }


    /* =========================================================
       18. SAFE TEXT FOR MESSAGES
       ========================================================= */

    function escapeHTML(text) {

        const div =
            document.createElement("div");

        div.textContent = text;

        return div.innerHTML;

    }


    /* =========================================================
       19. SELLER REMOVE PROPERTY
       ========================================================= */

    document.addEventListener(
        "click",
        function (e) {

            const button =
                e.target.closest("button");

            if (!button) return;


            if (
                button.textContent
                    .trim()
                    .toLowerCase() !== "remove"
            ) {
                return;
            }


            const row =
                button.closest(".row");


            if (!row) return;


            const confirmed =
                confirm(
                    "Are you sure you want to remove this property?"
                );


            if (confirmed) {

                row.remove();

            }

        }
    );


    /* =========================================================
       20. SELLER VIEW BUTTON
       ========================================================= */

    document.addEventListener(
        "click",
        function (e) {

            const button =
                e.target.closest("button");

            if (!button) return;


            if (
                button.textContent
                    .trim()
                    .toLowerCase() !== "view"
            ) {
                return;
            }


            const row =
                button.closest(".row");


            if (!row || !detail) return;


            const image =
                row.querySelector("img");


            const title =
                row.querySelector("b");


            const description =
                row.querySelector("p");


            if (detailBody) {

                detailBody.innerHTML = `

                    ${
                        image
                            ? `
                            <img
                                src="${image.src}"
                                alt="Property"
                                style="
                                    width:100%;
                                    max-height:350px;
                                    object-fit:cover;
                                    border-radius:12px;
                                    margin-bottom:15px;
                                "
                            >
                            `
                            : ""
                    }

                    <h2>
                        ${
                            title
                                ? title.textContent
                                : "Property"
                        }
                    </h2>

                    ${
                        description
                            ? `<p>${description.textContent}</p>`
                            : ""
                    }

                    <button data-action="viewing">
                        Request a view
                    </button>

                    <button data-action="contact">
                        Contact seller
                    </button>

                `;

            }


            detail.classList.add("active");

            detail.style.display = "flex";

        }
    );


    /* =========================================================
       21. SETTINGS
       ========================================================= */

    document.querySelectorAll(
        "#settings input, #settings select"
    ).forEach(function (field) {

        const key =
            "alphaSetting_" +
            (
                field.id ||
                field.name ||
                field.placeholder
            );


        const saved =
            localStorage.getItem(key);


        if (saved !== null) {

            field.value = saved;

        }


        field.addEventListener(
            "change",
            function () {

                localStorage.setItem(
                    key,
                    field.value
                );

            }
        );

    });


    /* =========================================================
       22. REQUEST A VIEW / CONTACT
       ========================================================= */

    document.addEventListener(
        "click",
        function (e) {

            const button =
                e.target.closest("button");

            if (!button) return;


            const text =
                button.textContent
                    .trim()
                    .toLowerCase();


            if (
                text.includes("request a view")
            ) {

                alert(
                    "Your viewing request has been sent!"
                );

            }


            if (
                text.includes("contact seller")
            ) {

                alert(
                    "Seller contact is ready."
                );

            }


            if (
                text.includes("save photo")
            ) {

                alert(
                    "Property photo saved!"
                );

            }

        }
    );


    /* =========================================================
       23. COMPARE BUTTON
       ========================================================= */

    document.querySelectorAll("button")
        .forEach(function (button) {

            if (
                button.textContent
                    .trim()
                    .toLowerCase() === "compare"
            ) {

                button.addEventListener(
                    "dblclick",
                    function () {

                        if (
                            compareList.length < 2
                        ) {

                            alert(
                                "Select at least 2 properties."
                            );

                            return;

                        }


                        alert(
                            "Properties selected for comparison:\n\n" +
                            compareList.join("\n")
                        );

                    }
                );

            }

        });


    /* =========================================================
       24. LOAD LOGIN INFORMATION
       ========================================================= */

    const savedEmail =
        localStorage.getItem(
            "alphaUserEmail"
        );


    if (
        savedEmail &&
        auth
    ) {

        const emailInput =
            auth.querySelector(
                'input[type="email"]'
            );


        if (
            emailInput &&
            !emailInput.value
        ) {

            emailInput.value =
                savedEmail;

        }

    }
    /* =========================================================
       25. INITIALIZE
       ========================================================= */

    updateCompare();


    console.log(
        "Alpha Real Estate Marketplace loaded successfully."
    );

});

/* Alpha enhancements — non-destructive polish */
(function () {
  var nav = document.querySelector('.navbar');
  if (nav) {
    var onScroll = function () {
      if (window.scrollY > 12) nav.classList.add('nav-scrolled');
      else nav.classList.remove('nav-scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if ('IntersectionObserver' in window) {
    var els = document.querySelectorAll('.card, .feature, .kpi, .panel, .section, .head, .grid');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
  }
})();
