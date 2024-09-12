import { Button, Flex } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export const PreviousNextPageNavigator = ({ nextPageRoute, previousPageRoute, nextPageLabel, previousPageLabel }) => {
    const navigate = useNavigate()

    const handleNavigation = (route) => {
        navigate(route)
        window.scrollTo(0, 0)  // Redireciona para o topo da página
    }

    return (
        <Flex width="100%" height="80px" px="128px" alignItems="center" justifyContent="end" gap={4} mt={12}>
            {previousPageRoute && <Button 
                variant="nextPage" 
                onClick={() => handleNavigation(previousPageRoute)}
            >
                {previousPageLabel || "Ir para a página anterior"}
            </Button>}
            {nextPageRoute && <Button 
                variant="nextPage"
                onClick={() => handleNavigation(nextPageRoute)}
            >
                {nextPageLabel || "Ir para a próxima página"}
            </Button>}
        </Flex>
    )
}
