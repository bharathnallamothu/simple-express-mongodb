import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const contacts = await req.context.models.Contact.find();
    return res.send(contacts);
});

router.get('/:contactId', async (req, res) => {
    const contact = await req.context.models.Contact.findById(
        req.params.contactId,
    );
    return res.send(contact);
});

router.post('/', async (req, res) => {
    let contactPayload = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address
    }
    if (req.body.imageUrl) contactPayload['imageUrl'] = req.body.imageUrl;

    const contact = await req.context.models.Contact.create(contactPayload);

    return res.send(contact);
});

router.delete('/:contactId', async (req, res) => {
    const contact = await req.context.models.Contact.findById(
        req.params.contactId,
    );

    let result = null;
    if (contact) {
        result = await contact.remove();
    }

    return res.send(result);
});

export default router;
