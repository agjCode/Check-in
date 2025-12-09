import { 
    styled,
 } from "@mui/material";


const Main = styled("main") (({ theme }) => ({
    width: "100%",
    height: "100%",
    flexShrink: 1,
    gap: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
}));


export const MainComponent: React.FC<{ children: React.ReactNode }> = ({ children, }) => {

  return (
    <Main>
        {children}
    </Main>
  );
};