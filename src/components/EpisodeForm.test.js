import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import Episode from 'episode'

test("renders without errors", ()=> {
    render(<Episode/>);
});

