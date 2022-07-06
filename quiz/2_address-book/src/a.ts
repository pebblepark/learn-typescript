function fetchItems() {
  let items = ["a", "b", "c"];
  return items;
}
let result = fetchItems();
console.log(result);

function fetchItemsAsync(): Promise<string[]> {
  let items: string[] = ["a", "b", "c"];
  return new Promise(function (resolve) {
    resolve(items);
  });
}
fetchItemsAsync();
