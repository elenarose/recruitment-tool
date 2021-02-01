import React, {useState} from "react";
import {Table} from "react-bootstrap";

export default function Home() {
    const [groups, setGroups] = useState([]);
    const [headers, setHeaders] = useState([]);

    function onChangeHandler(event){
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.addEventListener('loadend', function(e) {
            const allTextLines = reader.result.split(/\r\n|\n/);
            const heads = allTextLines[0].split(',');

            const list = allTextLines.map((line) => {
                const entry = line.split(',');
                const obj = {};
                entry.forEach((val, i) => {
                    obj[heads[i]] = val;
                });
                return obj;
            });

            setHeaders(heads);
            list.splice(0,1);
            setGroups(list);
        });

        reader.readAsText(file);
    }

    return (
        <div>
            <h2>Home</h2>

            <Table>
                <thead>
                    <tr>
                        {headers.map((val, i) => (<th key={i}>{val}</th>))}
                    </tr>
                </thead>
                <tbody>
                    {groups.map((row, index) => {
                        return (<tr key={index}>
                            {headers.map((head, i) => {
                                return <td key={i}>{row[head]}</td>
                            })}
                        </tr>)
                        })
                    }
                </tbody>
            </Table>

            <input type="file" name="file" onChange={onChangeHandler} accept=".csv"/>
        </div>
    );
}