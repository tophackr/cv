document.addEventListener('DOMContentLoaded', main)

function main() {
    const blocks = {
        profile: 'max-w-5',
        'inline-icons': 'max-w-5',
        'circle-icon': 'size-6 stroke-secondary'
    }

    Object.entries(blocks).map(([key, value]) => {
        const block = document.querySelectorAll(`[id="${key}"]`)
        Array.from(block).map(items => {
            const imgElements = items.getElementsByTagName('img')
            replaceImgToSvg(imgElements, value.split(' '))
        })
    })
}

function replaceImgToSvg(elements, classes) {
    const promises = Array.from(elements).map(i =>
        fetch(i.src)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser()
                const svg = parser.parseFromString(
                    data,
                    'image/svg+xml'
                ).documentElement
                classes.map(i => svg.classList.add(i))
                i.replaceWith(svg)
            })
    )

    return Promise.all(promises)
}
