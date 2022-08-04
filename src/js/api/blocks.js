import ErrorBlock from "../components/blocks/ErrorBlock";

export const makeBlock = async (paragraph) => {
    try {
        const Block = await import(`../components/blocks/${paragraph.item.systemName}.js`);
        return new Block.default(paragraph);
    } catch (error) {
        return new ErrorBlock(paragraph);
    }
}