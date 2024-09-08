import { Button, Flex } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export const PreviousNextPageNavigator = ({ nextPageRoute, previousPageRoute }) => {
    const navigate = useNavigate()

    return (
        <Flex width="100%" height="80px" px="128px" alignItems="center" justifyContent="end" gap={4} mt={12}>
            {previousPageRoute && <Button 
                variant="nextPage" 
                onClick={() => navigate(previousPageRoute)}
            >
                Ir para a página anterior
            </Button>}
            {nextPageRoute && <Button 
                variant="nextPage"
                onClick={() => navigate(nextPageRoute)}
            >
                Ir para a próxima página
            </Button>}
        </Flex>
    )
}
