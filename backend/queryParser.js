import nlp from 'compromise';

export const parseQuery = (query) => {
    if (!query) return;

    let language = nlp(query);

    return language.nouns().out('array').join(" ");
}