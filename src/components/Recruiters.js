import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import '../style/custom.scss';
const parse = require("csv-parse");

const people = [{name: "elena silva", bumpGroup: 1, bumpNumber: 3, color: 'blue'}]

function Recruiters() {
    const [recruiters, setRecruiters] = useState([]);

    useEffect(() => {
        setRecruiters(people);
    }, []);

    function uploadRecruiters(event) {
        if (event) {
            const reader = new FileReader();

            reader.onloadend = () => {
                parse(reader.result, (err, result) => {
                    if (err) {
                        console.log('error parsing file')
                    } else {
                        console.log(result);
                        const parsed = result.map((row) =>
                            ({
                                name: row[0],
                                color: row[1],
                                bumpGroup: row[2],
                                bumpNumber: row[3]
                            })
                        );
                        setRecruiters(parsed);
                    }
                });
            };

            reader.readAsText(event.target.files[0]);
        }
    }

    return (
        <div className="recruiters">
            <input type="file"
                   accept="text/csv"
                   onChange={uploadRecruiters}
                   className="input-file"
                   id="file" />
            <label htmlFor="file" className="btn btn-rounded ">
                Upload recruiters
            </label>

            <Table className="recruiters-table" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Bump group</th>
                        <th>Bump number</th>
                    </tr>
                </thead>
                <tbody>
                {recruiters.map(({name, color, bumpGroup, bumpNumber}, index) =>
                    <tr key={index}>
                        <td>{name}</td>
                        <td>{color}</td>
                        <td>{bumpGroup}</td>
                        <td>{bumpNumber}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    );
}

export default Recruiters;