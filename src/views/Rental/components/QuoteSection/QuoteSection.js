import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import Container from 'components/Container';

const QuoteSection = () => {
  const theme = useTheme();

  return (
    <Box bgcolor={'primary.main'}>
      <Container>
        <Box marginBottom={1}>
          <Box
            sx={{
              position: 'relative',
              width: { xs: 150, md: 200 },
              height: { xs: 80, md: 100 },
              margin: 'auto',
              color: 'primary.contrastText',
            }}
          >
            <Image
              layout={'fill'}
              objectFit="contain"
              src={'/quote-icon.jpeg'}
              alt={`get a quote icon`}
            />
          </Box>
          <Link href="/book">
            <Box component={'a'} href={'/book'}>
              <Typography
                variant="h5"
                align={'center'}
                gutterBottom
                sx={{
                  fontWeight: 700,
                  marginTop: theme.spacing(1),
                  textAlign: 'center',
                }}
                color={'primary.contrastText'}
              >
                GET A QUOTE NOW
              </Typography>
            </Box>
          </Link>
        </Box>
        <Box>
          <Typography
            variant="h6"
            align={'center'}
            color={'primary.contrastText'}
            component={'p'}
          >
            Fill in the enquiry form now for a free, no-obligation quote.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default QuoteSection;
