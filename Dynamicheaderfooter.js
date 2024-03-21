const header = document.querySelector('header');
const footer = document.querySelector('footer');

header.innerHTML = `
<div class="container">
    <div class="row">

    <!-- ==============================
             Ecommerce Font (Logo) 
         ============================== -->
        <div class="col-lg-4 col-md-12">
            <h2>Ecommerce</h2>
        </div>

        <!-- ===============================================================
                 Searchbar - Search Products name & Category name etc.. 
             =============================================================== -->
        <div class="col-lg-5 col-md-12">
            <div class="input-group">
                <input type="search" class="form-control" placeholder="Products name, Category name etc." aria-label="Search" aria-describedby="search-addon" />
                <button type="button" class="btn btn-outline-primary">Search</button>
            </div>
        </div>

        <!-- =====================
                Login Button 
             ===================== -->
        <div class="col-lg-2 col-md-12">
            <a href="Login.html" class="btn btn-success button">Login</a>
        </div>

    <!-- ====================================
             font awesome(shopping cart) 
         ==================================== -->
        <div class="col-lg-1 col-md-12">
            <a href="cart.html">
                <i class="fa fa-shopping-cart Scart" aria-hidden="true"></i>
            </a>
        </div>
    </div>
</div>

<!-- ==========================
            Menubar 
     ==========================  -->
    <div class="container">
        <div class="row">
    <!--  =========================
                  Navbar 
          =========================   -->
            <nav class="navbar navbar-expand-sm navbar-dark">
                <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#btn" aria-controls="btn" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="col-lg-12 col-md-12 collapse navbar-collapse" id="btn">
                    <ul class="navbar-nav mr-auto">

                  <!--  ==============================
                                     Home 
                        ==============================  -->
                        <li class="nav-item">
                        <a class="nav-link text-white" href="index.html">
                        <i class="fa fa-home" aria-hidden="true"></i>Home</a>
                        </li>
                      
                  <!--  ==============================
                                 All Product
                        ==============================  -->
                        <li class="nav-item">
                        <a class="nav-link text-white" href="all_Products.html">All Products</a>
                        </li>
                       
                        <li class="nav-item">
                            <ul class="navbar-nav">

                    <!-- ==============================================
                                 Women Product List (Dropdown list) 
                         ============================================== -->
                                <li class="nav-item dropdown">
                                    <button class="btn text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Women
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-dark">
                                        <li><a class="dropdown-item" href="All_Products_Women.html">All Products</a></li>
                                        <li><a class="dropdown-item" href="Women_Dresses.html">Dresses</a></li>
                                        <li><a class="dropdown-item" href="Women_Pant.html">Pants</a></li>
                                        <li><a class="dropdown-item" href="Women_Skirts.html">Skirts</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <ul class="navbar-nav">
                        <!-- ==============================================
                                    Men Product List (Dropdown list) 
                             ============================================== -->
                                <li class="nav-item dropdown">
                                    <button class="btn text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Men
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-dark">
                                        <li><a class="dropdown-item" href="All_Products_Men.html">All Products</a></li>
                                        <li><a class="dropdown-item" href="Men_Shirts.html">Shirts</a></li>
                                        <li><a class="dropdown-item" href="Men_Pants.html">Pants</a></li>
                                        <li><a class="dropdown-item" href="Men_Hoodies.html">Hoodies</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <!-- ==============================
                                         Kids
                             ==============================  -->
                        <li class="nav-item"><a class="nav-link text-white" href="Kids.html">Kids</a></li>
                       
                    <!-- ==============================
                                    Contact 
                         ==============================  -->
                        <li class="nav-item"><a class="nav-link text-white" href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
`;

footer.innerHTML = `
<div class="container">    
<div class="row footer">
<!--    ============================================
                Women Products footer side
        ============================================  -->
        <div class="col-lg-3 col-md-3 col-sm-12 mb-3">
        <h4 class="w">Women</h4>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <a href="Women_Dresses.html">Dresses</a>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <a href="Women_Pant.html">Pants</a>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <a href="Women_Skirts.html">Skirts</a>
                </div>
            </div>
        </div>

        <!--  ==========================================
                    Men Products footer side 
              ==========================================  -->
        <div class="col-lg-3 col-md-3 col-sm-12 mb-3">
            <h4>Men</h4>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <a href="Men_Shirts.html">Shirts</a>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <a href="Men_Pants.html">Pants</a>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <a href="Men_Hoodies.html">Hoodies</a>
                </div>
            </div>
        </div>

        <!-- Kids Products footer side -->
        <div class="col-lg-3 col-md-3 col-sm-12 mb-3">
            <a href="Kids.html">
                <h4>Kids</h4>
            </a>
        </div>

        <!-- Link Page footer side -->
        <div class="col-lg-3 col-md-3 col-sm-12 mb-3">
            <h4>Link</h4>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <a href="index.html">Home</a>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <a href="Login.html">Login</a>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <a href="contact.html">Contact</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Copyright -->
    <hr class="w-100">
    <div class="text-center pb-4">
        Copyright &copy; Ecommerce 2023 - 24
    </div>
    <!-- Copyright -->
    </div>
`;

