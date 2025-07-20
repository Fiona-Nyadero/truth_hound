import aiFacts from "../data/aiFacts";

function shuffleFacts() {
    const trueFacts = aiFacts.filter(fact => fact.truth === true);
    const falseFacts = aiFacts.filter(fact => fact.truth === false);

    function getRandomItems(arr, n) {
        return arr.sort(() => 0.5 - Math.random()).slice(0, n);
    }

    const selectedTrue = getRandomItems(trueFacts, 2);
    const selectedFalse = getRandomItems(falseFacts, 1);

    const roundFacts = [...selectedTrue, ...selectedFalse];
    const shuffled = roundFacts.sort(() => 0.5 - Math.random());

    return shuffled
};

export default shuffleFacts