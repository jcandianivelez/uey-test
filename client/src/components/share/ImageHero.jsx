import { Box } from "@mui/material"

export const ImageHero = () => {
    return (
        <Box>
            <img
                src="https://cdn0.bodas.com.mx/article-vendor/4486/3_2/1280/jpg/md-353_5_164486-165704042861607.jpeg"
                alt="hero"
                style={{
                    width: '100%',
                    maxHeight: '500px',
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
            ></img>
        </Box>
    )
}