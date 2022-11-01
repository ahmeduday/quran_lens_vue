<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid bg-primary ">
        <a class="navbar-brand text-white" href="/home">Quran Lens</a>
        <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active text-white" aria-current="page" href="/home">{{ $t('home') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/info">{{ $t('info') }}</a>
            </li>
            <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->
            <li class="nav-item">
              <a class="nav-link text-white" href="/subjects" tabindex="-1">{{ $t('subjects') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/chapters">{{ $t('chapters') }}</a>
            </li>
          </ul>
          <form>
            <select v-model="locale">
              <option value="en">en</option>
              <option value="ar">ar</option>
            </select>
          </form>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-light" type="submit"><i class="bi bi-search"></i></button>
          </form>
        </div>
      </div>
    </nav>
  </header>

  <NuxtPage />


  <!-- <div>
    <NuxtWelcome />
  </div> -->
</template>

<script setup>
const { locale } = useI18n()
</script>

