---
title: "How to Read a Peptide COA (and Spot a Fabricated One)"
description: "Unpublished draft awaiting factual and editorial review."
author: "DAVID .T"
pubDate: "2026-11-15"
draft: true
---

A certificate of analysis is the only document that tells you what is in a vial. It's also trivially easy to fake, which is why half the COAs floating around Telegram are screenshots of Word documents with no lab behind them.

Reading one properly takes about ninety seconds. Here's what a real one contains and what a fabricated one can't hide.

## What a legitimate COA has

A certificate issued by an actual analytical lab carries, at minimum:

- **Lab name, address and a report number** — a real entity you could phone
- **Batch or lot ID** matching the vial in your hand
- **Sample received date and report date**
- **Appearance** — description of the material as received
- **Identity confirmation** by mass spectrometry, with the observed mass stated
- **Purity by HPLC**, with the method, column and wavelength given
- **Water content** by Karl Fischer
- **Residual solvents** where relevant
- **Endotoxin** by LAL for injectable-grade material
- **A signature and the analyst's name**

If a certificate is missing the batch ID or the lab's identity, it isn't a COA. It's a graphic.

## The six tells of a fake

**1. No batch number, or a batch number that doesn't match your vial.** This is the whole function of the document. A COA for batch A proves nothing about the vial in your hand labelled B.

**2. It's a screenshot, not a PDF.** A screenshot can't carry metadata, can't be verified against a lab portal, and is the format of choice for anyone editing a number.

**3. Purity stated with no method.** "Purity: 99.4%" alone is meaningless. Purity by what, at what wavelength, on what column? HPLC-UV at 214nm and a gravimetric estimate are not the same measurement.

**4. Round numbers everywhere.** Real analysis produces 98.71%, 99.12%, 97.83%. A certificate reading 99% across four different peptides from four different batches has been typed, not measured.

**5. Identity by "FTIR" only.** FTIR can suggest a match; it can't confirm a sequence. Mass spec with the observed mass does. For a 7-residue fragment, the mass is the identity.

**6. No endotoxin on an injectable-grade product.** If the material goes into a body, endotoxin matters. Absence means either untested or a certificate assembled from a template.

## The matching test

The check that settles everything: the batch ID on the certificate must be the batch ID printed on the vial, and both must be the batch you were quoted.

Do it in this order:

1. Ask for the COA before paying, naming the peptide and quantity.
2. Confirm the batch ID on the document matches the batch you were quoted.
3. Confirm the lab name is a real company with a searchable presence.
4. Confirm identity is by mass spec with an observed mass that matches the theoretical mass of the peptide.
5. When the parcel lands, read the vial. Batch ID must match the document in your hand.

Fail any step and you're entitled to walk. A dealer who resists step 1 is telling you something.

## What purity numbers actually mean

Purity is the percentage of the peak area that is your target compound. It says nothing about what the remaining percentage is — related sequences, truncations, water, salts.

- **Below 95%:** a lot of other stuff in the vial
- **95–97%:** workable for non-critical work
- **98%+:** what a clean synthesis and a proper purification look like

A "99.9%" claim on a cheap vial is the most common single lie in the market. Very high purity is achievable but it costs, and the price is the tell.

Also check the units are consistent. A certificate reporting purity by area percentage at a stated wavelength is doing a defined measurement. One reporting "99.9% pure" with no further detail is doing marketing.

## Water content matters more than people think

A lyophilised cake with high residual water degrades faster in storage and reconstitutes unevenly. Karl Fischer titration gives the number. Anything above a few percent residual moisture and the shelf life claim on the label is optimistic.

## Residual solvents

Synthesis uses solvents. ICH Q3C sets limits for what may remain. A certificate that reports them has been produced by someone following a method; one that ignores them entirely is a template with the peptide name dropped in.

## What a COA cannot tell you

It can't tell you the vial was kept cold in transit. It can't tell you the certificate is the one that belongs to your parcel rather than a good batch from six months ago. It can't tell you the dealer is solvent and will still exist next month.

It's one document, not a guarantee. It's just the most useful document there is, and the only one a scammer struggles to produce.

**Next step:** every batch on this desk ships with a third-party PDF, lab name and batch ID included. Ask for the certificate for the exact batch before you pay anything. → [@donjuanjodyy](https://t.me/donjuanjodyy?text=Hi%20-%20COA%20article.%20Source%20page%3A%20%2Fblog%2Fhow-to-read-a-peptide-coa%2F)

_All products supplied as research chemicals. Not a pharmacy. Not medical advice._

## Sources

1. [ICH Q2, validation of analytical procedures](https://www.ich.org/page/quality-guidelines)
2. [ICH Q3C, residual solvents](https://www.ich.org/page/quality-guidelines)
3. [ICH Q6B, specifications for biotechnological products](https://www.ich.org/page/quality-guidelines)
4. [PubMed, LAL endotoxin testing](https://pubmed.ncbi.nlm.nih.gov/?term=limulus+amebocyte+lysate+endotoxin+testing)
