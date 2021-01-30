import Layout from '../components/layout';
import Card from '../components/card';

const DemoCard = () => (
    <Card
        title="Smart TV"
        price="$150.00"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi cras fermentum odio eu. "
        src="https://via.placeholder.com/55"
    />
);

export default function results() {
    return (
        <Layout>
            <DemoCard />
            <DemoCard />
            <DemoCard />
            <DemoCard />
            <DemoCard />
        </Layout>
    );
}
