//First Deliverable


const posts = [
  {
    title: "Post One",
    body: "This is post one",
    createdAt: new Date().getTime(),
  },

  {
    title: "Post Two",
    body: "This is post two",
    createdAt: new Date().getTime(),
  },
];

let intervalId = 0;
function getPosts() {
  setTimeout(() => {
    clearInterval(intervalId);

    intervalID = setInterval(() => {
      let output = "";

      posts.forEach((post) => {
        let timeStamp = (post.createdAt - new Date().getTime()) / 1000;

        output += `<li>${post.title} created ${timeStamp} seconds ago)</li>`;
      });

      document.body.innerHTML = output;
    }, 1000);
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ ...post, createdAt: new Date().getTime() });
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (posts.length > 0) {
        posts.pop();
      } else {
        error = true;
      }
      if (!error) {
        resolve();
      } else {
        reject("Error: Array empty");
      }
    }, 5000);
  });
}

createPost({ title: "Post three", body: "This is post three" })
  .then(getPosts)
  .catch((err) => console.log(err));

// deletePost().catch((err) => console.log(err));
// setTimeout(() => {
//   deletePost();
// }, 2000);
// setTimeout(() => {
//   deletePost().catch((err) => console.log(err));
// }, 3000);
// setTimeout(() => {
//   deletePost().catch((err) => console.log(err));
// }, 4000);

setTimeout(() => {
  createPost({ title: "Post four", body: "This is post four" })
    .then(() => {
      getPosts();
      setTimeout(() => {
        deletePost().catch((err) => console.log(err));
      }, 1000);
    })
    .catch((err) => console.log(err));
}, 8000);

// const promise1 = Promise.resolve("Hello World");
// const prommise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "Goodbye")
// );

let user = {
  name: "Anuraag",
  lastUserActivityTime: new Date(2022, 12, 25).toDateString(),
};

const updateLastUserActivityTime = new Promise((resolve, reject) =>
//1st syntax
  // setTimeout(resolve, 1000, () => {
  //   user.lastUserActivityTime = new Date().toDateString();
  // })
//2nd syntax
  resolve(
    setTimeout(() => {
      user.lastUserActivityTime = new Date().toDateString();
    },1000)
  )
);

Promise.all([createPost(), updateLastUserActivityTime]).then(() => {
  console.log(posts);
  console.log(user.lastUserActivityTime);
});
Promise.all([deletePost(), updateLastUserActivityTime]).then(() => {
  console.log(posts);
  console.log(user.lastUserActivityTime);
});

