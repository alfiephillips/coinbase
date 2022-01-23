import sanity from "@sanity/client";

export const client = sanity({
  projectId: "w8quhbmh",
  dataset: "production",
  apiVersion: "2022-01-23",
  token:
    "skaiWo5zJ8koOnEhhIEUTkwegK5sRY0tqyXHxZhtFBR9jQUDdAccAWRvhJ9Ctwv7HaQ6LfedPbhR9vhg3JqMnnAupE0Xwk8zaly1Kt4F7sbTiqDCSNFYygPbwNwCYQVO9av6upJiqEv4EMpRnfgEckIF9tJQP6OLpiiUnJvAvnqUSL9JVJt5",
  useCdn: false,
});
