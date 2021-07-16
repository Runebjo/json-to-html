import React from 'react'

function HtmlPreview({ header }) {

    console.log(header);

    const createHeaderElement = key => {
        console.log(key);
        return <th key={key}>{key}</th>
      }

    return (
        <table>
            <tr>
                {header.map(el => createHeaderElement(el))}
            </tr>
        </table>
    )
}

export default HtmlPreview
