<template>
  <div id="filters">
    <p
      v-for="(filter, index) in filters"
      :key="index"
      @click="applyFilter(filter)"
    >
      {{ filter.name }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: [
        {
          name: "Rating Highest",
          key: "rating",
          order: "desc",
        },
        {
          name: "Rating Lowest",
          key: "rating",
          order: "asc",
        },
        {
          name: "Year Newest",
          key: "year",
          order: "desc",
        },
        {
          name: "Year oldest",
          key: "year",
          order: "asc",
        },
      ],
    };
  },
  methods: {
    applyFilter(filter) {
      this.$store.dispatch("filter", filter);
    },
  },
};
</script>

<style lang='scss' scoped>
#filters {
  text-align: center;
  color: #ffffff;
  cursor: pointer;

  p {
    margin-left: 5px;
    padding: 10px;
    font-size: 20px;
    border-radius: 50px;
    font-weight: 200;
    transition: 0.4ms ease-in-out;
    &:hover {
      background: #fff;
      color: #000;
      transition: 0.4ms ease-in-out;
    }
  }
}
</style>