// styles
import styles from './Content.module.css'
// dependencies
import React from 'react'
// datas
import { data } from '../../data/top-card';
// components
import Card from './Card';
import { VictoryPie, VictoryBar } from "victory";
import Header from './Header';
import useMedia from './../../hooks/useMedia';

const Content = () => {
    const dataChart = [
        { x: 'Madrugada', y: 5150, },
        { x: 'Braganha', y: 4150, },
        { x: 'Cárter', y: 3150, },
        { x: 'Josmy', y: 2150, },
        { x: 'Lencastre', y: 800, }
    ]

    const dataUsers = [
        {
            id: 0,
            name: 'Madrugada de Carvalho',
            function: 'Front-End | Desenvolvidor Web',
            value: 5150
        },
        {
            id: 1,
            name: 'António Pedro',
            function: 'Developer | PHP Laravel | Java | C',
            value: 3150
        },
        {
            id: 2,
            name: 'Domingos Braganha',
            function: 'Back-End | Web Developer',
            value: 4150
        },
        {
            id: 3,
            name: 'Josmy Jacinto',
            function: 'Análista de Dados | Power BI | Excel',
            value: 2150
        },
        {
            id: 4,
            name: 'Domingos Lencastre',
            function: 'Técnico de Máquinas e Motores',
            value: 800
        },
    ];

    const mobileCard = useMedia('(max-width: 790px)');
    const mobile = useMedia('(max-width: 937px)');

    return (
        <div className={styles.content}>
            <Header />

            <section className={mobileCard ? styles.blockCardMobile : styles.blockCard}>
                {data && data.map((item) => <Card key={item.id} data={item} />)}
            </section>
            <section className={mobile ? styles.sectionTwoMobile : styles.sectionTwo}>
                <article>
                    {!mobileCard && <h2>Novembro</h2>}
                    <ul>
                        {dataUsers && dataUsers.map((item) => (
                            <li key={item.id} className={item.id === 0 && styles.active}>
                                <div>
                                    <p>{item.name}</p>
                                    <p>{item.function}</p>
                                </div>
                                <p>{item.value}</p>
                            </li>
                        ))}
                    </ul>
                </article>
                <article>
                    {!mobileCard && <h2>Novembro</h2>}
                    <VictoryPie
                        data={dataChart}
                        innerRadius={50}
                        padding={{ top: 0, right: 80, bottom: 80, left: 80 }}
                        style={{
                            data: { stroke: '#fff', strokeWidth: 1.5 },
                            labels: { fontSize: 14, fill: '#333' }
                        }}
                        colorScale={['#1F5540', '#2B7659', '#348F6C', '#7FC3A9', '#A6D9C5',]}
                    />
                </article>
                <article>
                    {!mobileCard && <h2>Novembro</h2>}
                    <VictoryBar
                        data={dataChart}
                        padding={{ top: 0, right: 20, bottom: 0, left: 20 }}
                        style={{
                            data: {
                                fill: ({ index }) => ['#1F5540', '#2B7659', '#348F6C', '#7FC3A9', '#A6D9C5',][index],
                                stroke: '#fff',
                                strokeWidth: 1.5,
                            }
                        }}
                    />
                </article>
            </section>
        </div>
    )
}

export default Content
