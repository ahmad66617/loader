export default async function getData() {
    try {
        const request = await fetch('https://raw.githubusercontent.com/netology-code/ajs-task/master/netology.json');
        return await request.json();
    } catch (err) {
        console.error(err);
    }
}