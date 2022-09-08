import { DISNEY_API } from "./constants.js";

export async function getHomeData() {
  return await fetch(DISNEY_API + 'home.json')
  .then(res => {
    return res.json();
  })
  .catch(err => {
    //some sort of error logging should happen here & a modal popup for user
    alert('error in getting home data');
  })
  .then(data => {
    return data.data;
  });
};

export async function getCollectionData(id) {
  return await fetch(DISNEY_API + 'sets/' + id + '.json')
  .then((res) => {
    return res.json();
  })
  .catch(err => {
    //some sort of error logging should happen here & a modal popup for user
    alert('error in getting show data');
  })
  .then((data) => {
    return data.data;
  });
};
