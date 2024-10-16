import { Flex, Text, Collapse, Box } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const MenuItem = ({ setIsOpen, icon, label, isOpen, router, subMenu = [] }) => {
  const location = useLocation();
  const isActive = location.pathname === router;
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    if (subMenu.length > 0) {
      setSubMenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (subMenu.length > 0) {
      setSubMenuOpen(false);
    }
  };

  const handleClick = () => {
    setIsOpen(false); // Fecha o menu ao clicar
  };

  return (
    <Flex
      direction="column"
      w="100%"
      position="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Flex
        align="center"
        mb={4}
        w="100%"
        fontSize="16px"
        cursor={subMenu.length === 0 ? "pointer" : "default"}
        color={isActive ? "#1ee9ff" : "inherit"}
        _hover={subMenu.length === 0 ? { color: "#19c1d3" } : {}}
      >
        <Flex
          align="center"
          justify="center"
          w="40px"
          h="40px"
          fontSize="24px"
          _hover={subMenu.length === 0 ? { transform: "scale(1.1)" } : {}}
          transition="transform 0.2s"
        >
          {subMenu.length === 0 ? (
            <Link to={router} onClick={handleClick}>
              {icon}
            </Link>
          ) : (
            <Box>{icon}</Box>
          )}
        </Flex>
        {subMenu.length === 0 ? (
          <Link to={router} onClick={handleClick}>
            <Text ml={2} fontSize="16px">
              {label}
            </Text>
          </Link>
        ) : (
          <Text ml={2} fontSize="16px">
            {label}
          </Text>
        )}
      </Flex>

      <Collapse in={isSubMenuOpen} animateOpacity p={2}>
        <Flex 
          direction="column" 
          borderLeft={isSubMenuOpen ? "2px solid #007987" : "none"}
          ml={4} 
          gap={2}
        >
          {subMenu.map((subItem, index) => {
            const isSubItemActive = location.pathname === subItem.router;
            return (
              <Link to={subItem.router} key={index} onClick={handleClick}>
                <Text
                  ml={2}
                  fontSize="14px"
                  color={isSubItemActive ? "#1ee9ff" : "gray.300"}
                  _hover={{ color: "#19c1d3" }}
                >
                  {subItem.label}
                </Text>
              </Link>
            );
          })}
        </Flex>
      </Collapse>
    </Flex>
  );
};

export default MenuItem;
