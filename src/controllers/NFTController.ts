import { Request, Response } from 'express';
import NFTService from '../services/NFTService';

class NFTController {
  async createNFT(req: Request, res: Response) {
    try {
      const nft = await NFTService.createNFT(req.body);
      res.status(201).json(nft);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getNFTById(req: Request, res: Response) {
    try {
      const nft = await NFTService.getNFTById(req.params.id);
      nft ? res.json(nft) : res.status(404).json({ error: 'NFT no encontrado' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getNFTsByUserId(req: Request, res: Response) {
    try {
      const nfts = await NFTService.getNFTsByUserId(req.params.userId);
      res.json(nfts);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new NFTController();