<template>
    <div>
      <Header />
      <OffCanvasMobileMenu />
      <PageTitle title="Admin panel" breadcrumbTitle="Admin" />

      <HeaderAdmin />

      <Nuxt />
    </div>
</template>

<script>
    export default {
        middleware: ['auth']
    }
</script>