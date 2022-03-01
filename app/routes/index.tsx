import GlobalNav from '~/components/globalNav';

export default function Index() {
    return (
        <main>
            {/* toolbar */}
            <GlobalNav />
            <section className="home-title">
                <h1>Shadow and Bone</h1>{' '}
            </section>
            <section className="cover-image">
                <img src="/cover_image.jpeg" alt="shadow and bone stag" />
            </section>
            <section className="bottom-credits">
                <a href="https://screenrant.com/shadow-bone-glossary-vocabulary-terminology-encyclopedia-guide/">
                    All information on characters, locations, and glossary was
                    copied from here
                </a>
                <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fepicstream.com%2Farticle%2Fshadow-and-bone-what-is-morozovas-stag-and-how-is-it-connected-to-alina-starkov&psig=AOvVaw0GR_0whSBQOnVunZt_3d73&ust=1645104787019000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCwyomrhPYCFQAAAAAdAAAAABAD">
                    Cover image was copied from here
                </a>
            </section>
        </main>
    );
}
