export function Generate() {
    return `
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="/index.html"><i class="fas fa-home-alt text-black"></i></a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#about">About</a></li>

                    <li class="nav-item"><a class="nav-link" href="#contacts">Contact</a></li>

                    <li class="nav-item"><a class="nav-link" href="/assets/Tallarico_William_Resume.pdf"
                            target="_blank">Resume</a></li>
                </ul>
            </div>
        </div>
    </nav>
  `;
}