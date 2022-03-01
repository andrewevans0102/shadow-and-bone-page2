import { Outlet } from 'react-router';
import GlobalNav from '~/components/globalNav';
import { useLoaderData } from 'remix';
import { redirect } from 'remix';
import axios from 'axios';
import { SERVER_BASE } from '~/constants/contants';
import { useState, useEffect } from 'react';

export async function loader(request: any) {
    try {
        const response = await axios.get(
            `${SERVER_BASE}/shadow-and-bone-server/list/characters`
        );
        return response.data.values;
    } catch (err) {
        console.error(err);
        redirect('/');
        return {};
    }
}

export default function Characters() {
    const data = useLoaderData();

    const [finalValues, setFinalValues] = useState([]);

    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        setFinalValues(data);
    }, []);

    const filterValues = (e: any) => {
        e.preventDefault();

        if (searchValue === '') {
            setFinalValues(data);
        } else {
            const filteredOutput = data.filter((value: any) => {
                const searchUpper = searchValue.toUpperCase();
                const nameUpper = value.name.toUpperCase();
                if (nameUpper.includes(searchUpper)) {
                    return true;
                } else {
                    return false;
                }
            });
            setFinalValues(filteredOutput);
        }
    };

    return (
        <>
            <GlobalNav />
            <h1>Shadow and Bone Characters</h1>
            <form>
                <input
                    name="search"
                    type="text"
                    value={searchValue}
                    onChange={(e: any) => {
                        setSearchValue(e.target.value);
                    }}
                />
                <button type="submit" onClick={(e) => filterValues(e)}>
                    Search
                </button>
            </form>
            <section>
                {finalValues !== [] &&
                    finalValues.map((value: any) => (
                        <article key={value.name}>
                            <h2>{value.name}</h2>
                            <div>{value.description}</div>
                        </article>
                    ))}
            </section>
            <Outlet />
        </>
    );
}
