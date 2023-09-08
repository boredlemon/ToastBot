import Link from 'next/link';

import { Card, Select } from '../components';

export default function Index() {
    return (
            <Card size='small'>
                <Card.Header>
                    <h2>
                        select
                    </h2>
                </Card.Header>

                <Card.Content>
                    <Select 
                        placeholder='Select a option'
                        customId='select_me'
                        maxValues={2}
                        options={[
                            {
                                label: 'Option 1',
                                value: 'op1',
                                default: true,
                            },
                            {
                                label: 'Option 2',
                                value: 'op2'
                            },
                            {
                                label: 'Option 3',
                                value: 'op3'
                            }
                        ]}
                    />
                </Card.Content>
            </Card>
    )
}