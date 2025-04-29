// Write a function to replace parameters in url

const initialUrl = "/posts/:postId/comments/:commentId"

const replaceParamsInUrl = (url, replacements) => {
    return replacements.reduce((acc, replacement) => {
        return acc.replace(":" + replacement.from, replacement.to);
    }, url);
}

const resultUrl = replaceParamsInUrl(initialUrl, [
    { from: "postId", to: "1" },
    { from: "commentId", to: "3" }
]);

console.log(resultUrl);