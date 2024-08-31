import { Box, Heading, Text } from '@chakra-ui/react';
import { LayoutBaseModify } from '../../layout/LayoutBaseModify';

export const Gene = () => {
    return (
        <LayoutBaseModify
            isRowReverse
            backgroundImage="assets/bgFundamentos/bgGene.jpg"
        >
            <Box 
                maxWidth='25rem' 
                mb='10rem'
            >
                <Heading variant='PrimaryTitle' textAlign='right'>DNA</Heading>
                <Text variant='Paragraph'>O DNA (ácido desoxirribonucleico) é o material genético que carrega as instruções para o desenvolvimento, funcionamento, crescimento e reprodução de todos os organismos vivos e muitos vírus. Ele é composto por duas cadeias que se enrolam para formar uma estrutura de dupla hélice.</Text>
                <Text variant='Paragraph'>Cada unidade do DNA, chamada de nucleotídeo, é composta por um grupo fosfato, uma molécula de açúcar e uma base nitrogenada. As quatro bases que compõem o DNA são adenina (A), timina (T), citosina (C) e guanina (G), e a sequência dessas bases determina a informação genética.</Text>

                <Heading variant='PrimaryTitle' textAlign='right'>RNA</Heading>
                <Text variant='Paragraph'>O RNA (ácido ribonucleico) é uma molécula similar ao DNA, mas com algumas diferenças chave. Enquanto o DNA é responsável por armazenar e transmitir a informação genética, o RNA tem várias funções, incluindo atuar como mensageiro que leva as instruções do DNA para a maquinaria celular que faz as proteínas.</Text>
                <Text variant='Paragraph'>O RNA é composto por uma única cadeia de nucleotídeos, e suas bases incluem adenina (A), citosina (C), guanina (G) e uracila (U), substituindo a timina (T) encontrada no DNA. Existem vários tipos de RNA, incluindo o mRNA (RNA mensageiro), tRNA (RNA transportador) e rRNA (RNA ribossômico).</Text>

                <Heading variant='PrimaryTitle' textAlign='right'>GENE</Heading>
                <Text variant='Paragraph'>Um gene é uma unidade de hereditariedade que ocupa um lugar específico em um cromossomo. Os genes são segmentos de DNA que contêm as instruções para produzir proteínas, que desempenham funções essenciais no organismo. Cada gene pode ter diferentes formas chamadas alelos, que podem resultar em variações observáveis nos organismos.</Text>
                <Text variant='Paragraph'>A expressão dos genes é regulada de maneira complexa, permitindo que diferentes células, tecidos e órgãos realizem funções especializadas. As mutações em genes podem levar a doenças genéticas, mas também podem contribuir para a evolução através da introdução de novas características em uma população.</Text>
            </Box>
        </LayoutBaseModify>
    )
}
